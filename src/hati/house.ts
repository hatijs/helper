import { constant, position, util } from '.';

export const house = (tjdUT: number, geoLon: number, geoLat: number) => {
    /**
     * Gets the 'house' information according to planet 'name'.
     * @param name Name of planet you want to know house of
     * @param hsys House system name
     * @returns 'absolute' - absolute coordinates, 'ruleOfMoiety' - coordinates with planet Moiety applied
     */
    const getPlanet = (
        name: keyof typeof constant.PLANET,
        hsys: keyof typeof constant.HOUSE_SYSTEM_SYMBOL
    ) => {
        const posHouse = util.getHouses(tjdUT, geoLon, geoLat, hsys);
        const posPlanet = position(tjdUT, geoLon, geoLat).getPlanet(name);

        const calculate = (
            houses: number[],
            planet: { longitude: number; moiety: number }
        ) => {
            const A = houses.map(
                (longitude) => longitude >= planet.longitude + planet.moiety
            );
            const B = houses.map(
                (longitude) => longitude < planet.longitude + planet.moiety
            );

            if (
                A.filter((v) => v).length === 0 &&
                B.filter((v) => v).length === 12
            ) {
                return (
                    houses
                        .map((longitude, i) => ({ i, longitude }))
                        .sort((a, b) => (a.longitude > b.longitude ? -1 : 1))[0]
                        .i + 1
                );
            }

            for (let i = 0; i < A.length; i++) {
                if (
                    !A[i % 12] &&
                    A[(i + 1) % 12] &&
                    B[i % 12] &&
                    !B[(i + 1) % 12]
                )
                    return i + 1;
            }
        };

        return {
            absolute: calculate(posHouse.house, {
                longitude: posPlanet.position.longitude.absolute,
                moiety: 0,
            }),
            ruleOfMoiety: calculate(posHouse.house, {
                longitude: posPlanet.position.longitude.absolute,
                moiety:
                    name in constant.MOIETY
                        ? constant.MOIETY[<keyof typeof constant.MOIETY>name]
                        : 0,
            }),
        };
    };

    /**
     * Gets the 'house' information according to lot 'name'.
     * @param name Name of lot you want to know house of
     * @param hsys House system name
     * @returns 'absolute' - absolute coordinates
     */
    const getLot = (
        name: keyof typeof constant.LOT,
        hsys: keyof typeof constant.HOUSE_SYSTEM_SYMBOL
    ) => {
        const posHouse = util.getHouses(tjdUT, geoLon, geoLat, hsys);
        const posLot = position(tjdUT, geoLon, geoLat).getLot(name);

        const calculate = (
            houses: number[],
            planet: { longitude: number; moiety: number }
        ) => {
            const A = houses.map(
                (longitude) => longitude >= planet.longitude + planet.moiety
            );
            const B = houses.map(
                (longitude) => longitude < planet.longitude + planet.moiety
            );

            if (
                A.filter((v) => v).length === 0 &&
                B.filter((v) => v).length === 12
            ) {
                return (
                    houses
                        .map((longitude, i) => ({ i, longitude }))
                        .sort((a, b) => (a.longitude > b.longitude ? -1 : 1))[0]
                        .i + 1
                );
            }

            for (let i = 0; i < A.length; i++) {
                if (
                    !A[i % 12] &&
                    A[(i + 1) % 12] &&
                    B[i % 12] &&
                    !B[(i + 1) % 12]
                )
                    return i + 1;
            }
        };

        return {
            absolute: calculate(posHouse.house, {
                longitude: posLot.position.longitude.absolute,
                moiety: 0,
            }),
        };
    };

    return {
        getPlanet,
        getLot,
    };
};
