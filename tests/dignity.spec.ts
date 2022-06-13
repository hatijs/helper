import Hati from '../src';

let hati: Hati;
let planets: any;
beforeAll(() => {
    hati = Hati.getInstance(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);

    const getPlanet = hati.dignity.getPlanet('RULERSHIP');
    planets = hati.util.createEnumObject<Parameters<typeof getPlanet>[0]>({
        SATURN: 'SATURN',
        JUPITER: 'JUPITER',
        MARS: 'MARS',
        SUN: 'SUN',
        VENUS: 'VENUS',
        MERCURY: 'MERCURY',
        MOON: 'MOON',
    });
});

describe('Testing Dignity', () => {
    describe('getPlanet', () => {
        test('RULERSHIP', () => {
            const getPlanet = hati.dignity.getPlanet('RULERSHIP');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ]);
        });

        test('EXALTATION', () => {
            const getPlanet = hati.dignity.getPlanet('EXALTATION');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ]);
        });

        test('TRIPLICITY', () => {
            const getPlanet = hati.dignity.getPlanet('TRIPLICITY');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                {
                    Dorothean: { First: false, Second: false, Partner: false },
                    Morinus: { First: false, Second: false, Partner: false },
                    Ptolemaic: { First: false, Second: false, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: false, Partner: false },
                    Morinus: { First: false, Second: true, Partner: false },
                    Ptolemaic: { First: false, Second: false, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: false, Partner: false },
                    Morinus: { First: true, Second: false, Partner: false },
                    Ptolemaic: { First: false, Second: false, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: true, Partner: false },
                    Morinus: { First: false, Second: true, Partner: false },
                    Ptolemaic: { First: false, Second: true, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: true, Partner: false },
                    Morinus: { First: false, Second: false, Partner: false },
                    Ptolemaic: { First: true, Second: false, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: false, Partner: false },
                    Morinus: { First: false, Second: false, Partner: false },
                    Ptolemaic: { First: false, Second: false, Partner: false },
                },
                {
                    Dorothean: { First: false, Second: false, Partner: false },
                    Morinus: { First: false, Second: false, Partner: false },
                    Ptolemaic: { First: false, Second: false, Partner: false },
                },
            ]);
        });

        test('TERM', () => {
            const getPlanet = hati.dignity.getPlanet('TERM');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                { Egyptian: false, Ptolemaic: false },
                { Egyptian: false, Ptolemaic: false },
                { Egyptian: true, Ptolemaic: true },
                { Egyptian: false, Ptolemaic: false },
                { Egyptian: false, Ptolemaic: false },
                { Egyptian: false, Ptolemaic: true },
                { Egyptian: false, Ptolemaic: false },
            ]);
        });

        test('DECAN', () => {
            const getPlanet = hati.dignity.getPlanet('DECAN');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                { Chaldean: true, Triplicity: false },
                { Chaldean: false, Triplicity: false },
                { Chaldean: true, Triplicity: true },
                { Chaldean: false, Triplicity: false },
                { Chaldean: false, Triplicity: false },
                { Chaldean: false, Triplicity: false },
                { Chaldean: false, Triplicity: false },
            ]);
        });
    });
});
