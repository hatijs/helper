import core from '@hatijs/core';

import { constant, util } from '.';

type Mapped<
    N extends number,
    Result extends Array<unknown> = []
> = Result['length'] extends N
    ? Result
    : Mapped<N, [...Result, Result['length']]>;

export const position = (tjdUT: number, geoLon: number, geoLat: number) => {
    /**
     * Gets the position of the house 'name' according to 'hsys'.
     * @param hsys House system name
     * @param name House 'Name' to know the position
     * @returns Constellation name and Position of longitude (absolute, relative)
     */
    const getHouse = (hsys: keyof typeof constant.House) => {
        const houses = util.getHouses(tjdUT, geoLon, geoLat, hsys);

        return (name: Exclude<Uppercase<keyof typeof houses>, 'HOUSE'>) => {
            return util.convertDegreeToPosition(
                houses[
                    <Exclude<keyof typeof houses, 'house'>>name.toLowerCase()
                ]
            );
        };
    };

    /**
     * Gets the position of the house 'number' according to 'hsys'.
     * @param hsys House system name
     * @param number House 'number' to know the position
     * @returns Constellation name and Position of longitude (absolute, relative)
     */
    const getHouses = (hsys: keyof typeof constant.House) => {
        const houses = util.getHouses(tjdUT, geoLon, geoLat, hsys).house;
        return (number: Mapped<12>[number]) => {
            return util.convertDegreeToPosition(houses[number]);
        };
    };

    /**
     * Gets the position according to the planet 'name'.
     * @param name Name of planet you want to know position of
     * @returns Constellation name and Position of longitude, latitude, rectAscension, declination, Speed of longitude, latitude
     */
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

    /**
     * Gets the position according to the lot 'name'.
     * @param name Name of lot you want to know position of
     * @returns Constellation name and Position of longitude
     */
    const getLot = (name: keyof typeof constant.Lot) => {
        const isDiurnal = util.isDiurnal(tjdUT, geoLon, geoLat);
        const asc = util.getHouses(tjdUT, geoLon, geoLat, 'WHOLE_SIGN');

        const acquisition = () => {
            return fortune() + 10 * 30;
        };

        const basis = () => {
            const lotOfFortune = fortune();
            const lotOfSpirit = fortune(true);

            const love =
                asc.ascendant +
                (isDiurnal
                    ? lotOfSpirit - lotOfFortune
                    : lotOfFortune - lotOfSpirit);
            const necessity =
                asc.ascendant +
                (isDiurnal
                    ? lotOfFortune - lotOfSpirit
                    : lotOfSpirit - lotOfFortune);

            return util.isDiurnal(tjdUT, geoLon, geoLat, love)
                ? necessity
                : love;
        };

        const exaltation = () => {
            const sun = getPlanet('SUN');
            const moon = getPlanet('MOON');

            return (
                asc.ascendant +
                (isDiurnal
                    ? 19 - sun.position.longitude.absolute
                    : 33 - moon.position.longitude.absolute)
            );
        };

        const fortune = (inversion: boolean = false) => {
            const sun = getPlanet('SUN');
            const moon = getPlanet('MOON');

            return (
                asc.ascendant +
                ((isDiurnal && !inversion) || (!isDiurnal && inversion)
                    ? moon.position.longitude.absolute -
                      sun.position.longitude.absolute
                    : sun.position.longitude.absolute -
                      moon.position.longitude.absolute)
            );
        };

        let result;
        switch (name) {
            case 'ACQUISITION': {
                result = acquisition();
                break;
            }
            case 'BASIS': {
                result = basis();
                break;
            }
            case 'EXALTATION': {
                result = exaltation();
                break;
            }
            case 'FORTUNE': {
                result = fortune();
                break;
            }
            case 'SPIRIT': {
                result = fortune(true);
                break;
            }
        }

        return util.convertDegreeToPosition(result);
    };

    return {
        getHouse,
        getHouses,
        getPlanet,
        getLot,
    };
};
