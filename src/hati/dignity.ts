import { constant, position, util } from '.';

export const dignity = (tjdUT: number, geoLon: number, geoLat: number) => {
    const getPlanet = (rule: keyof typeof constant.Dignity) => {
        const isDiurnal = util.isDiurnal(tjdUT, geoLon, geoLat);
        const dignity = constant[constant.Dignity[rule]];

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

            switch (rule) {
                case 'TRIPLICITY': {
                    return Object.keys(range)
                        .map((key) => {
                            const [first, second, partner] = (<number[][][]>(
                                range[<keyof typeof range>key][
                                    isDiurnal ? 0 : 1
                                ]
                            )).map((value) => checkRange(value));

                            const result: { [key: string]: any } = {};

                            result[util.convertUpperCaseToCapitalize(key)] = {
                                First: first,
                                Second: second,
                                Partner: partner,
                            };

                            return result;
                        })
                        .reduce((prev, cur) => ({ ...prev, ...cur }));
                }
                case 'TERM':
                case 'DECAN': {
                    return Object.keys(range)
                        .map((key) => {
                            const result: { [key: string]: any } = {};

                            result[util.convertUpperCaseToCapitalize(key)] =
                                checkRange(range[<keyof typeof range>key]);

                            return result;
                        })
                        .reduce((prev, cur) => ({ ...prev, ...cur }));
                }
            }
        };
    };

    return {
        getPlanet,
    };
};
