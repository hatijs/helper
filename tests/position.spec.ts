import Hati from '../src';

let hati: Hati;
beforeAll(() => {
    hati = Hati.getInstance(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);
});

describe('Testing Position', () => {
    describe('getHouse', () => {
        test('PORPHYRY', () => {
            const houses = hati.position.getHouse('PORPHYRY');
            const keys = Hati.util.createEnumObject<
                Parameters<typeof houses>[0]
            >({
                ARMC: 'ARMC',
                ASCENDANT: 'ASCENDANT',
                EQUATORIALASCENDANT: 'EQUATORIALASCENDANT',
                KOCHCOASCENDANT: 'KOCHCOASCENDANT',
                MC: 'MC',
                MUNKASEYCOASCENDANT: 'MUNKASEYCOASCENDANT',
                MUNKASEYPOLARASCENDANT: 'MUNKASEYPOLARASCENDANT',
                VERTEX: 'VERTEX',
            });

            const result = Object.keys(keys).map((house) => {
                const { constellation, position } = houses(
                    <keyof typeof houses>house
                );
                return [
                    constellation,
                    position.longitude.absolute,
                    position.longitude.relative,
                ];
            });

            expect(result).toStrictEqual([
                [{ name: 'Virgo' }, 156.3720625401026, 6.372062540102604],
                [{ name: 'Scorpio' }, 233.83191934884618, 23.831919348846185],
                [{ name: undefined }, undefined, NaN],
                [{ name: undefined }, undefined, NaN],
                [{ name: 'Virgo' }, 154.5076660745534, 4.507666074553413],
                [{ name: undefined }, undefined, NaN],
                [{ name: undefined }, undefined, NaN],
                [{ name: 'Cancer' }, 99.66993930918929, 9.669939309189289],
            ]);
        });
    });

    describe('getHouses', () => {
        test('PORPHYRY', () => {
            const houses = hati.position.getHouses('PORPHYRY');

            const result = Object.keys(
                Array(12)
                    .fill(() => 0)
                    .map((_, i) => i)
            ).map((house) => {
                const { constellation, position } = houses(
                    <keyof typeof houses>house
                );
                return [
                    constellation,
                    position.longitude.absolute,
                    position.longitude.relative,
                ];
            });

            expect(result).toStrictEqual([
                [{ name: 'Scorpio' }, 233.83191934884618, 23.831919348846185],
                [
                    { name: 'Sagittarius' },
                    264.16200636362436,
                    24.162006363624357,
                ],
                [{ name: 'Capricorn' }, 298.7745623688436, 28.77456236884359],
                [{ name: 'Pisce' }, 334.5076660745534, 4.507666074553413],
                [{ name: 'Aries' }, 6.255373824062872, 6.255373824062872],
                [{ name: 'Taurus' }, 32.230215324437495, 2.230215324437495],
                [{ name: 'Taurus' }, 53.83191934884621, 23.831919348846213],
                [{ name: 'Gemini' }, 84.16200636362436, 24.162006363624357],
                [{ name: 'Cancer' }, 118.77456236884359, 28.77456236884359],
                [{ name: 'Virgo' }, 154.5076660745534, 4.507666074553413],
                [{ name: 'Libra' }, 186.2553738240629, 6.2553738240629],
                [{ name: 'Scorpio' }, 212.2302153244375, 2.230215324437495],
            ]);
        });
    });

    describe('getPlanet', () => {
        test('SUN', () => {
            const sun = hati.position.getPlanet('SUN');

            expect(sun).toStrictEqual({
                name: 'SUN',
                constellation: { name: 'Sagittarius' },
                position: {
                    longitude: {
                        absolute: 243.39436188691664,
                        relative: 3.3943618869166414,
                    },
                    latitude: -0.00007563938614282484,
                    rectAscension: 241.36853615800743,
                    declination: -20.832643413219806,
                },
                speed: {
                    longitude: 1.0116833781933507,
                    latitude: 0.000010875746705972084,
                },
            });
        });
    });

    describe('getLot', () => {
        test('FORTUNE', () => {
            const fortune = hati.position.getLot('FORTUNE');

            expect(fortune).toStrictEqual({
                constellation: { name: 'Aquarius' },
                position: {
                    longitude: {
                        absolute: 328.5666862135374,
                        relative: 28.566686213537423,
                    },
                },
            });
        });
    });
});
