import Hati from '../src';

let hati: Hati;
beforeAll(() => {
    hati = new Hati(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);
});

describe('Testing House', () => {
    describe('getPlanet', () => {
        test('SUN', () => {
            const result = Object.keys(Hati.constant.HOUSE_SYSTEM_SYMBOL).map((house) => {
                const { absolute, ruleOfMoiety } = hati.house.getPlanet(
                    'SUN',
                    <keyof typeof Hati.constant.HOUSE_SYSTEM_SYMBOL>house
                );
                return [absolute, ruleOfMoiety];
            });

            expect(result).toStrictEqual([
                [1, 1],
                [1, 1],
                [1, 1],
                [1, 1],
                [1, 1],
                [2, 2],
                [12, 1],
                [12, 1],
                [12, 12],
                [1, 1],
                [1, 1],
                [1, 1],
            ]);
        });

        test('MOON', () => {
            const result = Object.keys(Hati.constant.HOUSE_SYSTEM_SYMBOL).map((house) => {
                const { absolute, ruleOfMoiety } = hati.house.getPlanet(
                    'MOON',
                    <keyof typeof Hati.constant.HOUSE_SYSTEM_SYMBOL>house
                );
                return [absolute, ruleOfMoiety];
            });

            expect(result).toStrictEqual([
                [9, 9],
                [9, 9],
                [9, 9],
                [9, 9],
                [10, 10],
                [10, 11],
                [9, 9],
                [9, 9],
                [9, 9],
                [9, 9],
                [10, 10],
                [9, 9],
            ]);
        });
    });
    describe('getLot', () => {
        test('FORTUNE', () => {
            const result = Object.keys(Hati.constant.HOUSE_SYSTEM_SYMBOL).map((house) => {
                const { absolute } = hati.house.getLot(
                    'FORTUNE',
                    <keyof typeof Hati.constant.HOUSE_SYSTEM_SYMBOL>house
                );
                return [absolute];
            });

            expect(result).toStrictEqual([
                [3],
                [3],
                [3],
                [3],
                [4],
                [4],
                [3],
                [3],
                [3],
                [3],
                [4],
                [3],
            ]);
        });
    });
});
