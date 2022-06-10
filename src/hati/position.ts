import core from '@hatijs/core';

import { constant, house, util } from '.';

export const position = (tjdUT: number, geoLon: number, geoLat: number) => {
    const hse = house(tjdUT, geoLon, geoLat);

    const getPlanet = (name: keyof typeof constant.Planet) => {
        const planet = constant.Planet[name];

        const resultSpeed = core.node_swe_calc_ut(
            tjdUT,
            planet,
            core.SEFLG_SPEED
        );
        const resultEquatorial = core.node_swe_calc_ut(
            tjdUT,
            planet,
            core.SEFLG_EQUATORIAL
        );

        if ('error' in resultSpeed) throw new Error(resultSpeed.error);

        if ('error' in resultEquatorial)
            throw new Error(resultEquatorial.error);

        const result = {
            name: Object.keys(constant.Planet)[
                Object.values(constant.Planet)
                    .map((v, i) => (v === planet ? i : undefined))
                    .filter((v) => v)[0] ?? 0
            ],
            constellation: {
                name: '',
            },
            position: {
                longitude: {
                    absolute: 0,
                    relative: 0,
                },
                latitude: 0,
                rectAscension: 0,
                declination: 0,
            },
            speed: {
                longitude: 0,
                latitude: 0,
            },
        };

        if ('longitude' in resultSpeed && 'declination' in resultEquatorial) {
            result.constellation = {
                name: constant.Constellation[
                    util.getConstellationIndexFromLongitude(
                        resultSpeed.longitude
                    )
                ],
            };

            result.position = {
                longitude: {
                    absolute: resultSpeed.longitude,
                    relative:
                        resultSpeed.longitude -
                        util.getConstellationIndexFromLongitude(
                            resultSpeed.longitude
                        ) *
                            30,
                },
                latitude: resultSpeed.latitude,
                rectAscension: resultEquatorial.rectAscension,
                declination: resultEquatorial.declination,
            };

            result.speed = {
                longitude: resultSpeed.longitudeSpeed,
                latitude: resultSpeed.latitudeSpeed,
            };
        }

        return result;
    };

    return {
        getPlanet,
        getLot: (name: keyof typeof constant.Lot) => {
            let result;
            switch (name) {
                case 'FORTUNE': {
                    const isDiurnal = hse.isDiurnal();

                    const asc = hse.getPosition('WHOLE_SIGN');
                    const sun = getPlanet('SUN');
                    const moon = getPlanet('MOON');

                    result =
                        asc.ascendant +
                        (isDiurnal
                            ? moon.position.longitude.absolute -
                              sun.position.longitude.absolute
                            : sun.position.longitude.absolute -
                              moon.position.longitude.absolute);
                    break;
                }
                case 'SPIRIT': {
                    const isDiurnal = hse.isDiurnal();

                    const asc = hse.getPosition('WHOLE_SIGN');
                    const sun = getPlanet('SUN');
                    const moon = getPlanet('MOON');

                    result =
                        asc.ascendant +
                        (isDiurnal
                            ? sun.position.longitude.absolute -
                              moon.position.longitude.absolute
                            : moon.position.longitude.absolute -
                              sun.position.longitude.absolute);
                    break;
                }
            }

            return util.convertDegreeToPosition(result);
        },
    };
};
