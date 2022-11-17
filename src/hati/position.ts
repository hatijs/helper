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
     * @param dodecatemoria Indication of dodecatemoria information
     * @param name House 'Name' to know the position
     * @returns Constellation name and Position of longitude (absolute, relative)
     */
    const getHouse = (
        hsys: keyof typeof constant.HOUSE_SYSTEM_SYMBOL,
        dodecatemoria?: boolean
    ) => {
        const houses = util.getHouses(tjdUT, geoLon, geoLat, hsys);
        return (name: Exclude<Uppercase<keyof typeof houses>, 'HOUSE'>) => {
            const result = util.convertDegreeToPosition(
                houses[
                    <Exclude<keyof typeof houses, 'house'>>name.toLowerCase()
                ]
            );

            if (dodecatemoria) {
                return {
                    ...result,
                    dodecatemoria: _getDodecatemoria(result.position.longitude),
                };
            }
            return result;
        };
    };

    /**
     * Gets the position of the house 'number' according to 'hsys'.
     * @param hsys House system name
     * @param dodecatemoria Indication of dodecatemoria information
     * @param number House 'number' to know the position
     * @returns Constellation name and Position of longitude (absolute, relative)
     */
    const getHouses = (
        hsys: keyof typeof constant.HOUSE_SYSTEM_SYMBOL,
        dodecatemoria?: boolean
    ) => {
        const houses = util.getHouses(tjdUT, geoLon, geoLat, hsys).house;
        return (number: Mapped<12>[number]) => {
            const result = util.convertDegreeToPosition(houses[number]);
            if (dodecatemoria) {
                return {
                    ...result,
                    dodecatemoria: _getDodecatemoria(result.position.longitude),
                };
            }

            return result;
        };
    };

    /**
     * Gets the position according to the planet 'name'.
     * @param name Name of planet you want to know position of
     * @param dodecatemoria Indication of dodecatemoria information
     * @returns Constellation name and Position of longitude, latitude, rectAscension, declination, Speed of longitude, latitude
     */
    const getPlanet = (
        name: keyof typeof constant.PLANET,
        dodecatemoria?: boolean
    ) => {
        const planet = constant.PLANET[name];

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
            name: Object.keys(constant.PLANET)[
                Object.values(constant.PLANET)
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
                absolute: {
                    longitude: 0,
                    latitude: 0,
                },
                relative: {
                    longitude: 0,
                },
            },
        };

        if ('longitude' in resultSpeed && 'declination' in resultEquatorial) {
            result.constellation = {
                name: constant.CONSTELLATION[
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
                absolute: {
                    longitude: resultSpeed.longitudeSpeed,
                    latitude: resultSpeed.latitudeSpeed,
                },
                relative: {
                    longitude: 0,
                },
            };

            if (name in constant.SPEED.AVERAGE.DIRECT) {
                result.speed.relative = {
                    longitude:
                        resultSpeed.longitudeSpeed >= 0
                            ? resultSpeed.longitudeSpeed /
                              constant.SPEED.AVERAGE.DIRECT[
                                  <keyof typeof constant.SPEED.AVERAGE.DIRECT>(
                                      name
                                  )
                              ]
                            : resultSpeed.longitudeSpeed /
                              constant.SPEED.AVERAGE.RETROGRADE[
                                  <
                                      keyof typeof constant.SPEED.AVERAGE.RETROGRADE
                                  >name
                              ],
                };
            }

            if (dodecatemoria) {
                return {
                    ...result,
                    dodecatemoria: _getDodecatemoria(result.position.longitude),
                };
            }
        }

        return result;
    };

    /**
     * Gets the position according to the lot 'name'.
     * @param name Name of lot you want to know position of
     * @param dodecatemoria Indication of dodecatemoria information
     * @returns Constellation name and Position of longitude
     */
    const getLot = (
        name: keyof typeof constant.LOT,
        dodecatemoria?: boolean
    ) => {
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

        result = util.convertDegreeToPosition(result);
        if (dodecatemoria) {
            return {
                ...result,
                dodecatemoria: _getDodecatemoria(result.position.longitude),
            };
        }

        return result;
    };

    const _getDodecatemoria = (longitude: {
        absolute: number;
        relative: number;
    }) => {
        const absolute =
            (util.getConstellationIndexFromLongitude(longitude.absolute) * 30 +
                longitude.relative * 12) %
            360;
        return {
            constellation: {
                name: constant.CONSTELLATION[
                    util.getConstellationIndexFromLongitude(absolute)
                ],
            },
            position: {
                longitude: {
                    absolute,
                    relative:
                        absolute -
                        util.getConstellationIndexFromLongitude(absolute) * 30,
                },
            },
        };
    };

    return {
        getHouse,
        getHouses,
        getPlanet,
        getLot,
    };
};
