import Hati from '../src';

let hati: Hati;
beforeAll(() => {
    hati = new Hati(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);
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
                [{ name: 'VIRGO' }, 156.37206254010266, 6.372062540102661],
                [{ name: 'SCORPIO' }, 233.8319193488462, 23.831919348846213],
                [{ name: undefined }, NaN, NaN],
                [{ name: undefined }, NaN, NaN],
                [{ name: 'VIRGO' }, 154.5076660745534, 4.507666074553413],
                [{ name: undefined }, NaN, NaN],
                [{ name: undefined }, NaN, NaN],
                [{ name: 'CANCER' }, 99.66993930918932, 9.669939309189317],
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
                [{ name: 'SCORPIO' }, 233.8319193488462, 23.831919348846213],
                [{ name: 'SAGITTARIUS' }, 264.1620063636244, 24.162006363624414],
                [{ name: 'CAPRICORN' }, 298.7745623688436, 28.77456236884359],
                [{ name: 'PISCE' }, 334.5076660745534, 4.507666074553413],
                [{ name: 'ARIES' }, 6.255373824062872, 6.255373824062872],
                [{ name: 'TAURUS' }, 32.230215324437495, 2.230215324437495],
                [{ name: 'TAURUS' }, 53.83191934884621, 23.831919348846213],
                [{ name: 'GEMINI' }, 84.16200636362436, 24.162006363624357],
                [{ name: 'CANCER' }, 118.77456236884359, 28.77456236884359],
                [{ name: 'VIRGO' }, 154.5076660745534, 4.507666074553413],
                [{ name: 'LIBRA' }, 186.25537382406287, 6.255373824062872],
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
                    latitude: -0.000075639386139611,
                    rectAscension: 241.36853615800743,
                    declination: -20.83264341321981,
                },
                speed: {
                    longitude: 1.0116833781577443,
                    latitude: 0.000010875754566425983,
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
                        absolute: 328.5666862135388,
                        relative: 28.566686213538787,
                    },
                },
            });
        });
    });
});
