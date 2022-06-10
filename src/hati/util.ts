import core from "@hatijs/core";

import { constant, position } from ".";

const getPosition = (tjdUT: number, geoLon: number, geoLat: number, hsys: keyof typeof constant.House) => {
    const result = core.node_swe_houses(tjdUT, geoLat, geoLon, hsys);

    if ('error' in result)
        throw new Error(result.error);

    return result;
}

const isDiurnal = (tjdUT: number, geoLon: number, geoLat: number, posPoint?: number) => {
    const posHouse = getPosition(tjdUT, geoLon, geoLat, 'WHOLE_SIGN');

    if (!posPoint) {
        posPoint = position(tjdUT, geoLon, geoLat).getPlanet('SUN').position.longitude.absolute;
    }

    return !(posPoint > posHouse.ascendant && posHouse.ascendant + 180 >= posPoint)
}

export const util = {
    getVersion: () => core.node_swe_version(),
    getConstellationIndexFromLongitude: (longitude: number) => Math.floor(longitude / 30) % 12,
    getConstellationIndexFromConstellationName: (constellationName: string) => Object.values(constant.Constellation).indexOf(constellationName),
    convertDegreeToDMS: (degree: number) => ({
        degree: Math.floor(degree % 30),
        minute: Math.floor((degree * 60) % 60),
        second: Math.floor((degree * 60 * 60) % 60)
    }),
    convertDegreeToPosition: (degree: number) => ({
        constellation: {
            name: constant.Constellation[util.getConstellationIndexFromLongitude(degree)]
        },
        position: {
            longitude: {
                absolute: degree,
                relative: degree - util.getConstellationIndexFromLongitude(degree) * 30,
            }
        }
    }),
    getDuodecatemorion: (degree: number) => {
        return util.convertDegreeToPosition((degree % 30) * 12 + Math.floor(degree / 30) * 30);
    },
    convertUpperCaseToCapitalize: (str: string) => str.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase()),
    getPosition,
    isDiurnal,
};
