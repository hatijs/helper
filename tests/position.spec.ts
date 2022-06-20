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
                [{ name: 'VIRGO' }, 156.3720625401026, 6.372062540102604],
                [{ name: 'SCORPIO' }, 233.83191934884618, 23.831919348846185],
                [{ name: undefined }, undefined, NaN],
                [{ name: undefined }, undefined, NaN],
                [{ name: 'VIRGO' }, 154.5076660745534, 4.507666074553413],
                [{ name: undefined }, undefined, NaN],
                [{ name: undefined }, undefined, NaN],
                [{ name: 'CANCER' }, 99.66993930918929, 9.669939309189289],
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
                [{ name: 'SCORPIO' }, 233.83191934884618, 23.831919348846185],
                [
                    { name: 'SAGITTARIUS' },
                    264.16200636362436,
                    24.162006363624357,
                ],
                [{ name: 'CAPRICORN' }, 298.7745623688436, 28.77456236884359],
                [{ name: 'PISCE' }, 334.5076660745534, 4.507666074553413],
                [{ name: 'ARIES' }, 6.255373824062872, 6.255373824062872],
                [{ name: 'TAURUS' }, 32.230215324437495, 2.230215324437495],
                [{ name: 'TAURUS' }, 53.83191934884621, 23.831919348846213],
                [{ name: 'GEMINI' }, 84.16200636362436, 24.162006363624357],
                [{ name: 'CANCER' }, 118.77456236884359, 28.77456236884359],
                [{ name: 'VIRGO' }, 154.5076660745534, 4.507666074553413],
                [{ name: 'LIBRA' }, 186.2553738240629, 6.2553738240629],
                [{ name: 'SCORPIO' }, 212.2302153244375, 2.230215324437495],
            ]);
        });
    });

    describe('getPlanet', () => {
        test('SUN', () => {
            const sun = hati.position.getPlanet('SUN');

            expect(sun).toStrictEqual({
                name: 'SUN',
                constellation: { name: 'SAGITTARIUS' },
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
                constellation: { name: 'AQUARIUS' },
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
