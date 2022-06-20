import core from '@hatijs/core';

import { constant, position } from '.';

export const util = {
    /**
     * Converts the radian degree to the sexagesimal measure.
     * @param degree Radian degree you want to convert
     * @returns Sexagesimal measure (Degree, Minute, Second)
     */
    convertDegreeToDMS: (degree: number) => ({
        degree: Math.floor(degree % 30),
        minute: Math.floor((degree * 60) % 60),
        second: Math.floor((degree * 60 * 60) % 60),
    }),
    /**
     * Converts the radian degree to the position.
     * @param degree Radian degree you want to convert
     * @returns Constellation name, Position of longitude (absolute, relative)
     */
    convertDegreeToPosition: (degree: number) => ({
        constellation: {
            name: constant.CONSTELLATION[
                util.getConstellationIndexFromLongitude(degree)
            ],
        },
        position: {
            longitude: {
                absolute: degree,
                relative:
                    degree -
                    util.getConstellationIndexFromLongitude(degree) * 30,
            },
        },
    }),
    /**
     * Converts only the first letter to uppercase.
     * @param str The string you want to convert
     * @returns Captilized string
     */
    convertUpperCaseToCapitalize: (str: string) =>
        str.toLowerCase().replace(/\b[a-z]/g, (char) => char.toUpperCase()),
    /**
     * An object suitable for a given type is input and a corresponding object is generated.
     * @param o Objects for a given type T
     * @returns Implemented objects with a given type T
     */
    createEnumObject: <T extends string>(o: { [P in T]: P }) => {
        return o;
    },
    /**
     * Gets the constellation index according to the order of Aries-Pieces constellation according to the given longitude.
     * @param longitude
     * @returns Constellation Index according to the order of Aries-Pieces constellation
     */
    getConstellationIndexFromLongitude: (longitude: number) =>
        Math.floor(longitude / 30) % 12,
    /**
     * Gets the constellation index according to the order of Aries-Pieces constellation according to the given constellation 'name'.
     * @param name Constellation name
     * @returns Constellation Index according to the order of Aries-Pieces constellation
     */
    getConstellationIndexFromConstellationName: (
        name: keyof typeof constant.CONSTELLATION
    ) => Object.values(constant.CONSTELLATION).indexOf(name),
    /**
     * Gets the position of the duodecatemorion according to the given degree.
     * @param degree The radian degree you want to calculate
     * @returns Duodecatemorion radian degree
     */
    getDuodecatemorion: (degree: number) => {
        return util.convertDegreeToPosition(
            (degree % 30) * 12 + Math.floor(degree / 30) * 30
        );
    },
    /**
     * Gets house information according to the given information.
     * @param tjdUT Julian date based on UTC time zone
     * @param geoLon Radian longitude
     * @param geoLat Radian Latitude
     * @param hsys House system name
     * @returns House position information
     */
    getHouses: (
        tjdUT: number,
        geoLon: number,
        geoLat: number,
        hsys: keyof typeof constant.HOUSE
    ) => {
        const result = core.node_swe_houses(tjdUT, geoLat, geoLon, hsys);

        if ('error' in result) throw new Error(result.error);

        return result;
    },
    /**
     * Get node SWE version.
     * @returns version
     */
    getVersion: () => core.node_swe_version(),
    /**
     * Gets whether a particular point is located in the upper half of the chart or whether the chart is a day chart.
     * @param tjdUT Julian date based on UTC time zone
     * @param geoLon Radian longitude
     * @param geoLat Radian Latitude
     * @param posPoint Position of the point to be calculated. If not given, the standard is sun
     * @returns Whether it is located in the upper half of the chart
     */
    isDiurnal: (
        tjdUT: number,
        geoLon: number,
        geoLat: number,
        posPoint?: number
    ) => {
        const posHouse = util.getHouses(tjdUT, geoLon, geoLat, 'WHOLE_SIGN');

        if (!posPoint) {
            posPoint = position(tjdUT, geoLon, geoLat).getPlanet('SUN').position
                .longitude.absolute;
        }

        return !(
            posPoint > posHouse.ascendant &&
            posHouse.ascendant + 180 >= posPoint
        );
    },
};
