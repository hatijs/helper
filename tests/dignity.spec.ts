import Hati from '../src';

let hati: Hati;
let planets: any;
beforeAll(() => {
    hati = new Hati(new Date('1994-11-26T06:41:00Z'), 9, 126.52, 37.21);

    const getPlanet = hati.dignity.getPlanet('RULERSHIP');
    planets = Hati.util.createEnumObject<Parameters<typeof getPlanet>[0]>({
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
                    dorothean: { first: false, second: false, partner: false },
                    morinus: { first: false, second: false, partner: false },
                    ptolemaic: { first: false, second: false, partner: false },
                },
                {
                    dorothean: { first: false, second: false, partner: false },
                    morinus: { first: false, second: true, partner: false },
                    ptolemaic: { first: false, second: false, partner: false },
                },
                {
                    dorothean: { first: false, second: false, partner: false },
                    morinus: { first: true, second: false, partner: false },
                    ptolemaic: { first: false, second: false, partner: false },
                },
                {
                    dorothean: { first: false, second: true, partner: false },
                    morinus: { first: false, second: true, partner: false },
                    ptolemaic: { first: false, second: true, partner: false },
                },
                {
                    dorothean: { first: false, second: true, partner: false },
                    morinus: { first: false, second: false, partner: false },
                    ptolemaic: { first: true, second: false, partner: false },
                },
                {
                    dorothean: { first: false, second: false, partner: false },
                    morinus: { first: false, second: false, partner: false },
                    ptolemaic: { first: false, second: false, partner: false },
                },
                {
                    dorothean: { first: false, second: false, partner: false },
                    morinus: { first: false, second: false, partner: false },
                    ptolemaic: { first: false, second: false, partner: false },
                },
            ]);
        });

        test('TERM', () => {
            const getPlanet = hati.dignity.getPlanet('TERM');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                { egyptian: false, ptolemaic: false },
                { egyptian: false, ptolemaic: false },
                { egyptian: true, ptolemaic: true },
                { egyptian: false, ptolemaic: false },
                { egyptian: false, ptolemaic: false },
                { egyptian: false, ptolemaic: true },
                { egyptian: false, ptolemaic: false },
            ]);
        });

        test('DECAN', () => {
            const getPlanet = hati.dignity.getPlanet('DECAN');
            const result = Object.keys(planets).map((planet) => {
                return getPlanet(<Parameters<typeof getPlanet>[0]>planet);
            });

            expect(result).toStrictEqual([
                { chaldean: true, triplicity: false },
                { chaldean: false, triplicity: false },
                { chaldean: true, triplicity: true },
                { chaldean: false, triplicity: false },
                { chaldean: false, triplicity: false },
                { chaldean: false, triplicity: false },
                { chaldean: false, triplicity: false },
            ]);
        });
    });
});
