import { constant, position, util } from '.';

export const dignity = (tjdUT: number, geoLon: number, geoLat: number) => {
    /**
     * Gets whether it is 'ownership' according to planet 'name'.
     * @param ownership The type of ownership a planet can have
     * @param name Name of planet you want to know ownership of
     * @returns boolean
     */
    const getPlanet = (ownership: keyof typeof constant.DIGNITY) => {
        const isDiurnal = util.isDiurnal(tjdUT, geoLon, geoLat);
        const dignity = constant[constant.DIGNITY[ownership]];

        return (name: keyof typeof dignity) => {
            const posPlanet = position(tjdUT, geoLon, geoLat).getPlanet(name);
            const checkRange = (range: number[][]) => {
                return (
                    range
                        .map(
                            ([start, end]: number[]) =>
                                posPlanet.position.longitude.absolute % 360 >=
                                    start &&
                                end >=
                                    posPlanet.position.longitude.absolute % 360
                        )
                        .filter((value) => value).length > 0
                );
            };

            const range = dignity[name];
            if (Array.isArray(range)) return checkRange(range);

            switch (ownership) {
                case 'TRIPLICITY': {
                    return Object.keys(range)
                        .map((key) => {
                            const [first, second, partner] = (<number[][][]>(
                                range[<keyof typeof range>key][
                                    isDiurnal ? 0 : 1
                                ]
                            )).map((value) => checkRange(value));

                            return {
                                [util.convertUpperCaseToCapitalize(key)]: {
                                    First: first,
                                    Second: second,
                                    Partner: partner,
                                },
                            };
                        })
                        .reduce((prev, cur) => ({ ...prev, ...cur }));
                }
                case 'TERM':
                case 'DECAN': {
                    return Object.keys(range)
                        .map((key) => ({
                            [util.convertUpperCaseToCapitalize(key)]:
                                checkRange(range[<keyof typeof range>key]),
                        }))
                        .reduce((prev, cur) => ({ ...prev, ...cur }));
                }
            }
        };
    };

    return {
        getPlanet,
    };
};
