import Hati from '../src';

let hati: Hati;
beforeAll(() => {
    hati = new Hati(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);
});

describe('Testing Position', () => {
    describe('getHouse', () => {
        test('PORPHYRY', () => {
            const houses = hati.position.getHouse('PORPHYRY', true);
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

            const result = [];
            const result_dodecatemoria = [];
            for (const house of Object.keys(keys)) {
                const data = houses(
                    <keyof typeof houses>house
                );

                result.push([
                    data.constellation,
                    data.position.longitude.absolute,
                    data.position.longitude.relative,
                ]);

                if ('dodecatemoria' in data) {
                    result_dodecatemoria.push([
                        data.dodecatemoria.constellation,
                        data.dodecatemoria.position.longitude.absolute,
                        data.dodecatemoria.position.longitude.relative,
                    ]);
                }
            }

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

            expect(result_dodecatemoria).toStrictEqual([
                [{ name: 'SCORPIO' }, 226.46475048123193, 16.46475048123193],
                [{ name: 'LEO' }, 135.98303218615456, 15.98303218615456],
                [{ name: undefined }, NaN, NaN],
                [{ name: undefined }, NaN, NaN],
                [{ name: 'LIBRA' }, 204.09199289464095, 24.091992894640953],
                [{ name: undefined }, NaN, NaN],
                [{ name: undefined }, NaN, NaN],
                [{ name: 'LIBRA' }, 206.0392717102718, 26.039271710271805]
            ]);
        });
    });

    describe('getHouses', () => {
        test('PORPHYRY', () => {
            const houses = hati.position.getHouses('PORPHYRY', true);
            const house_array = Array(12)
                .fill(() => 0)
                .map((_, i) => i);

            const result = [];
            const result_dodecatemoria = [];
            for (const house of Object.keys(house_array)) {
                const data = houses(
                    <keyof typeof houses>house
                );

                result.push([
                    data.constellation,
                    data.position.longitude.absolute,
                    data.position.longitude.relative,
                ]);

                if ('dodecatemoria' in data) {
                    result_dodecatemoria.push([
                        data.dodecatemoria.constellation,
                        data.dodecatemoria.position.longitude.absolute,
                        data.dodecatemoria.position.longitude.relative,
                    ]);
                }
            }

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

            expect(result_dodecatemoria).toStrictEqual([
                [{ name: 'LEO' }, 135.98303218615456, 15.98303218615456],
                [{ name: 'VIRGO' }, 169.94407636349297, 19.944076363492968],
                [{ name: 'SAGITTARIUS' }, 255.29474842612308, 15.294748426123078],
                [{ name: 'ARIES' }, 24.091992894640953, 24.091992894640953],
                [{ name: 'GEMINI' }, 75.06448588875446, 15.064485888754461],
                [{ name: 'TAURUS' }, 56.76258389324994, 26.76258389324994],
                [{ name: 'AQUARIUS' }, 315.98303218615456, 15.98303218615456],
                [{ name: 'PISCE' }, 349.9440763634923, 19.944076363492286],
                [{ name: 'GEMINI' }, 75.29474842612308, 15.294748426123078],
                [{ name: 'LIBRA' }, 204.09199289464095, 24.091992894640953],
                [{ name: 'SAGITTARIUS' }, 255.06448588875446, 15.064485888754461],
                [{ name: 'SCORPIO' }, 236.76258389324994, 26.76258389324994]
            ]);
        });
    });

    describe('getPlanet', () => {
        test('SUN', () => {
            const sun = hati.position.getPlanet('SUN', true);

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
                    absolute: {
                        longitude: 1.0116833781933507,
                        latitude: 0.000010875746705972084,
                    },
                    relative: {
                        longitude: 1.0265107557767934
                    }
                },
                dodecatemoria: {
                    constellation: { name: 'CAPRICORN' },
                    position: {
                        longitude: {
                            absolute: 280.7323426429997,
                            relative: 10.732342642999697,
                        },
                    },
                },
            });
        });
    });

    describe('getLot', () => {
        test('FORTUNE', () => {
            const fortune = hati.position.getLot('FORTUNE', true);

            expect(fortune).toStrictEqual({
                constellation: { name: 'AQUARIUS' },
                position: {
                    longitude: {
                        absolute: 328.5666862135374,
                        relative: 28.566686213537423,
                    },
                },
                dodecatemoria: {
                    constellation: { name: 'CAPRICORN' },
                    position: {
                        longitude: {
                            absolute: 282.8002345624491,
                            relative: 12.800234562449077,
                        },
                    },
                },
            });
        });
    });
});
