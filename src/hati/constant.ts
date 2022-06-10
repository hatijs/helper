import core from '@hatijs/core';

enum Constellation {
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisce',
}

const Planet = {
    ECL_NUT: core.SE_ECL_NUT,
    SUN: core.SE_SUN,
    MOON: core.SE_MOON,
    MERCURY: core.SE_MERCURY,
    VENUS: core.SE_VENUS,
    MARS: core.SE_MARS,
    JUPITER: core.SE_JUPITER,
    SATURN: core.SE_SATURN,
    URANUS: core.SE_URANUS,
    NEPTUNE: core.SE_NEPTUNE,
    PLUTO: core.SE_PLUTO,
    MEAN_NODE: core.SE_MEAN_NODE,
    TRUE_NODE: core.SE_TRUE_NODE,
    MEAN_APOG: core.SE_MEAN_APOG,
    OSCU_APOG: core.SE_OSCU_APOG,
    EARTH: core.SE_EARTH,
    CHIRON: core.SE_CHIRON,
    PHOLUS: core.SE_PHOLUS,
    CERES: core.SE_CERES,
    PALLAS: core.SE_PALLAS,
    JUNO: core.SE_JUNO,
    VESTA: core.SE_VESTA,
    INTP_APOG: core.SE_INTP_APOG,
    INTP_PERG: core.SE_INTP_PERG,
    NPLANETS: core.SE_NPLANETS,
    FICT_OFFSET: core.SE_FICT_OFFSET,
    NFICT_ELEM: core.SE_NFICT_ELEM,
    PLMOON_OFFSET: core.SE_PLMOON_OFFSET,
    AST_OFFSET: core.SE_AST_OFFSET,
    CUPIDO: core.SE_CUPIDO,
    HADES: core.SE_HADES,
    ZEUS: core.SE_ZEUS,
    KRONOS: core.SE_KRONOS,
    APOLLON: core.SE_APOLLON,
    ADMETOS: core.SE_ADMETOS,
    VULKANUS: core.SE_VULKANUS,
    POSEIDON: core.SE_POSEIDON,
    ISIS: core.SE_ISIS,
    NIBIRU: core.SE_NIBIRU,
    HARRINGTON: core.SE_HARRINGTON,
    NEPTUNE_LEVERRIER: core.SE_NEPTUNE_LEVERRIER,
    NEPTUNE_ADAMS: core.SE_NEPTUNE_ADAMS,
    PLUTO_LOWELL: core.SE_PLUTO_LOWELL,
    PLUTO_PICKERING: core.SE_PLUTO_PICKERING,
};

const Lot = {
    ACQUISITION: 100,
    BASIS: 101,
    EXALTATION: 102,
    FORTUNE: 103,
    SPIRIT: 104,
};

const Moiety = {
    SUN: 5,
    MOON: 4.5,
    MERCURY: 3.5,
    VENUS: 3.5,
    MARS: 3.5,
    JUPITER: 3.5,
    SATURN: 3.5,
    URANUS: 2.5,
    NEPTUNE: 2.5,
    PLUTO: 2.5,
};

const Dignity = {
    RULERSHIP: <'Rulership'>'Rulership',
    EXALTATION: <'Exaltation'>'Exaltation',
    TRIPLICITY: <'Triplicity'>'Triplicity',
    TERM: <'Term'>'Term',
    DECAN: <'Decan'>'Decan',
    FALL: <'Fall'>'Fall',
    DETRIMENT: <'Detriment'>'Detriment',
};

const Rulership = {
    SATURN: [
        [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
        [Constellation.Aquarius * 30, Constellation.Pisce * 30],
    ],
    JUPITER: [
        [Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
        [Constellation.Pisce * 30, 360],
    ],
    MARS: [
        [Constellation.Aries * 30, Constellation.Taurus * 30],
        [Constellation.Scorpio * 30, Constellation.Sagittarius * 30],
    ],
    SUN: [[Constellation.Leo * 30, Constellation.Virgo * 30]],
    VENUS: [
        [Constellation.Taurus * 30, Constellation.Gemini * 30],
        [Constellation.Libra * 30, Constellation.Scorpio * 30],
    ],
    MERCURY: [
        [Constellation.Gemini * 30, Constellation.Cancer * 30],
        [Constellation.Virgo * 30, Constellation.Libra * 30],
    ],
    MOON: [[Constellation.Cancer * 30, Constellation.Leo * 30]],
};

const Exaltation = {
    SATURN: [[Constellation.Libra * 30, Constellation.Scorpio * 30]],
    JUPITER: [[Constellation.Cancer * 30, Constellation.Leo * 30]],
    MARS: [[Constellation.Capricorn * 30, Constellation.Aquarius * 30]],
    SUN: [[Constellation.Aries * 30, Constellation.Taurus * 30]],
    VENUS: [[Constellation.Pisce * 30, 360]],
    MERCURY: [[Constellation.Virgo * 30, Constellation.Libra * 30]],
    MOON: [[Constellation.Taurus * 30, Constellation.Gemini * 30]],
};

const Triplicity = {
    SATURN: {
        DOROTHEAN: [
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
            ],
            [
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
            ],
        ],
        MORINUS: [
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [],
            ],
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
            ],
        ],
    },
    JUPITER: {
        DOROTHEAN: [
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
            ],
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
            ],
        ],
        MORINUS: [
            [
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
            ],
            [
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
            ],
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
                [],
            ],
        ],
    },
    MARS: {
        DOROTHEAN: [
            [
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
            ],
            [
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
            ],
        ],
        MORINUS: [
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
            ],
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
                [],
            ],
        ],
        PTOLEMAIC: [
            [
                [],
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
            [
                [],
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
        ],
    },
    SUN: {
        DOROTHEAN: [
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
            ],
        ],
        MORINUS: [
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [Constellation.Aries * 30, Constellation.Taurus * 30],
                    [Constellation.Leo * 30, Constellation.Virgo * 30],
                    [
                        Constellation.Sagittarius * 30,
                        Constellation.Capricorn * 30,
                    ],
                ],
                [],
            ],
        ],
    },
    VENUS: {
        DOROTHEAN: [
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
            ],
        ],
        MORINUS: [
            [
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
            ],
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
            ],
            [
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [],
            ],
        ],
    },
    MERCURY: {
        DOROTHEAN: [
            [
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
            ],
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
                [],
            ],
        ],
        MORINUS: [
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
            ],
            [
                [],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [],
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
            ],
            [
                [
                    [Constellation.Gemini * 30, Constellation.Cancer * 30],
                    [Constellation.Libra * 30, Constellation.Scorpio * 30],
                    [Constellation.Aquarius * 30, Constellation.Pisce * 30],
                ],
                [],
                [],
            ],
        ],
    },
    MOON: {
        DOROTHEAN: [
            [
                [],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
        ],
        MORINUS: [
            [
                [],
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
            [
                [],
                [],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [],
            ],
            [
                [
                    [Constellation.Taurus * 30, Constellation.Gemini * 30],
                    [Constellation.Virgo * 30, Constellation.Libra * 30],
                    [Constellation.Capricorn * 30, Constellation.Aquarius * 30],
                ],
                [
                    [Constellation.Cancer * 30, Constellation.Leo * 30],
                    [
                        Constellation.Scorpio * 30,
                        Constellation.Sagittarius * 30,
                    ],
                    [Constellation.Pisce * 30, 360],
                ],
                [],
            ],
        ],
    },
};

const Term = {
    SATURN: {
        EGYPTIAN: [
            [Constellation.Aries * 30 + 25, Constellation.Aries * 30 + 30],
            [Constellation.Taurus * 30 + 22, Constellation.Taurus * 30 + 27],
            [Constellation.Gemini * 30 + 24, Constellation.Gemini * 30 + 30],
            [Constellation.Cancer * 30 + 26, Constellation.Cancer * 30 + 30],
            [Constellation.Leo * 30 + 11, Constellation.Leo * 30 + 18],
            [Constellation.Virgo * 30 + 28, Constellation.Virgo * 30 + 30],
            [Constellation.Libra * 30, Constellation.Libra * 30 + 6],
            [Constellation.Scorpio * 30 + 24, Constellation.Scorpio * 30 + 30],
            [
                Constellation.Sagittarius * 30 + 21,
                Constellation.Sagittarius * 30 + 26,
            ],
            [
                Constellation.Capricorn * 30 + 22,
                Constellation.Capricorn * 30 + 26,
            ],
            [
                Constellation.Aquarius * 30 + 25,
                Constellation.Aquarius * 30 + 30,
            ],
            [Constellation.Pisce * 30 + 28, Constellation.Pisce * 30 + 30],
        ],
        PTOLEMAIC: [
            [Constellation.Aries * 30 + 26, Constellation.Aries * 30 + 30],
            [Constellation.Taurus * 30 + 22, Constellation.Taurus * 30 + 26],
            [Constellation.Gemini * 30 + 21, Constellation.Gemini * 30 + 25],
            [Constellation.Cancer * 30 + 27, Constellation.Cancer * 30 + 30],
            [Constellation.Leo * 30, Constellation.Leo * 30 + 6],
            [Constellation.Virgo * 30 + 18, Constellation.Virgo * 30 + 24],
            [Constellation.Libra * 30, Constellation.Libra * 30 + 6],
            [Constellation.Scorpio * 30 + 27, Constellation.Scorpio * 30 + 30],
            [
                Constellation.Sagittarius * 30 + 19,
                Constellation.Sagittarius * 30 + 25,
            ],
            [
                Constellation.Capricorn * 30 + 25,
                Constellation.Capricorn * 30 + 30,
            ],
            [Constellation.Aquarius * 30, Constellation.Aquarius * 30 + 6],
            [Constellation.Pisce * 30 + 26, Constellation.Pisce * 30 + 30],
        ],
    },
    JUPITER: {
        EGYPTIAN: [
            [Constellation.Aries * 30, Constellation.Aries * 30 + 6],
            [Constellation.Taurus * 30 + 14, Constellation.Taurus * 30 + 22],
            [Constellation.Gemini * 30 + 6, Constellation.Gemini * 30 + 12],
            [Constellation.Cancer * 30 + 19, Constellation.Cancer * 30 + 26],
            [Constellation.Leo * 30, Constellation.Leo * 30 + 6],
            [Constellation.Virgo * 30 + 17, Constellation.Virgo * 30 + 21],
            [Constellation.Libra * 30 + 14, Constellation.Libra * 30 + 21],
            [Constellation.Scorpio * 30 + 19, Constellation.Scorpio * 30 + 24],
            [
                Constellation.Sagittarius * 30,
                Constellation.Sagittarius * 30 + 12,
            ],
            [
                Constellation.Capricorn * 30 + 7,
                Constellation.Capricorn * 30 + 14,
            ],
            [
                Constellation.Aquarius * 30 + 13,
                Constellation.Aquarius * 30 + 20,
            ],
            [Constellation.Pisce * 30 + 12, Constellation.Pisce * 30 + 16],
        ],
        PTOLEMAIC: [
            [Constellation.Aries * 30, Constellation.Aries * 30 + 6],
            [Constellation.Taurus * 30 + 15, Constellation.Taurus * 30 + 22],
            [Constellation.Gemini * 30 + 7, Constellation.Gemini * 30 + 13],
            [Constellation.Cancer * 30 + 6, Constellation.Cancer * 30 + 13],
            [Constellation.Leo * 30 + 19, Constellation.Leo * 30 + 25],
            [Constellation.Virgo * 30 + 13, Constellation.Virgo * 30 + 18],
            [Constellation.Libra * 30 + 11, Constellation.Libra * 30 + 19],
            [Constellation.Scorpio * 30 + 6, Constellation.Scorpio * 30 + 14],
            [
                Constellation.Sagittarius * 30,
                Constellation.Sagittarius * 30 + 8,
            ],
            [
                Constellation.Capricorn * 30 + 12,
                Constellation.Capricorn * 30 + 19,
            ],
            [
                Constellation.Aquarius * 30 + 20,
                Constellation.Aquarius * 30 + 25,
            ],
            [Constellation.Pisce * 30 + 8, Constellation.Pisce * 30 + 14],
        ],
    },
    MARS: {
        EGYPTIAN: [
            [Constellation.Aries * 30 + 20, Constellation.Aries * 30 + 25],
            [Constellation.Taurus * 30 + 27, Constellation.Taurus * 30 + 30],
            [Constellation.Gemini * 30 + 17, Constellation.Gemini * 30 + 24],
            [Constellation.Cancer * 30, Constellation.Cancer * 30 + 7],
            [Constellation.Leo * 30 + 24, Constellation.Leo * 30 + 30],
            [Constellation.Virgo * 30 + 21, Constellation.Virgo * 30 + 28],
            [Constellation.Libra * 30 + 28, Constellation.Libra * 30 + 30],
            [Constellation.Scorpio * 30, Constellation.Scorpio * 30 + 7],
            [
                Constellation.Sagittarius * 30 + 26,
                Constellation.Sagittarius * 30 + 30,
            ],
            [
                Constellation.Capricorn * 30 + 26,
                Constellation.Capricorn * 30 + 30,
            ],
            [
                Constellation.Aquarius * 30 + 20,
                Constellation.Aquarius * 30 + 25,
            ],
            [Constellation.Pisce * 30 + 19, Constellation.Pisce * 30 + 28],
        ],
        PTOLEMAIC: [
            [Constellation.Aries * 30 + 21, Constellation.Aries * 30 + 26],
            [Constellation.Taurus * 30 + 26, Constellation.Taurus * 30 + 30],
            [Constellation.Gemini * 30 + 25, Constellation.Gemini * 30 + 30],
            [Constellation.Cancer * 30, Constellation.Cancer * 30 + 6],
            [Constellation.Leo * 30 + 25, Constellation.Leo * 30 + 30],
            [Constellation.Virgo * 30 + 24, Constellation.Virgo * 30 + 30],
            [Constellation.Libra * 30 + 24, Constellation.Libra * 30 + 30],
            [Constellation.Scorpio * 30, Constellation.Scorpio * 30 + 6],
            [
                Constellation.Sagittarius * 30 + 25,
                Constellation.Sagittarius * 30 + 30,
            ],
            [
                Constellation.Capricorn * 30 + 19,
                Constellation.Capricorn * 30 + 25,
            ],
            [
                Constellation.Aquarius * 30 + 25,
                Constellation.Aquarius * 30 + 30,
            ],
            [Constellation.Pisce * 30 + 20, Constellation.Pisce * 30 + 26],
        ],
    },
    SUN: {
        EGYPTIAN: [],
        PTOLEMAIC: [],
    },
    VENUS: {
        EGYPTIAN: [
            [Constellation.Aries * 30 + 6, Constellation.Aries * 30 + 12],
            [Constellation.Taurus * 30, Constellation.Taurus * 30 + 8],
            [Constellation.Gemini * 30 + 12, Constellation.Gemini * 30 + 17],
            [Constellation.Cancer * 30 + 7, Constellation.Cancer * 30 + 13],
            [Constellation.Leo * 30 + 6, Constellation.Leo * 30 + 11],
            [Constellation.Virgo * 30 + 7, Constellation.Virgo * 30 + 17],
            [Constellation.Libra * 30 + 21, Constellation.Libra * 30 + 28],
            [Constellation.Scorpio * 30 + 7, Constellation.Scorpio * 30 + 11],
            [
                Constellation.Sagittarius * 30 + 12,
                Constellation.Sagittarius * 30 + 17,
            ],
            [
                Constellation.Capricorn * 30 + 14,
                Constellation.Capricorn * 30 + 22,
            ],
            [Constellation.Aquarius * 30 + 7, Constellation.Aquarius * 30 + 13],
            [Constellation.Pisce * 30, Constellation.Pisce * 30 + 12],
        ],
        PTOLEMAIC: [
            [Constellation.Aries * 30 + 6, Constellation.Aries * 30 + 14],
            [Constellation.Taurus * 30, Constellation.Taurus * 30 + 8],
            [Constellation.Gemini * 30 + 14, Constellation.Gemini * 30 + 21],
            [Constellation.Cancer * 30 + 20, Constellation.Cancer * 30 + 27],
            [Constellation.Leo * 30 + 13, Constellation.Leo * 30 + 19],
            [Constellation.Virgo * 30 + 7, Constellation.Virgo * 30 + 13],
            [Constellation.Libra * 30 + 6, Constellation.Libra * 30 + 11],
            [Constellation.Scorpio * 30 + 14, Constellation.Scorpio * 30 + 21],
            [
                Constellation.Sagittarius * 30 + 8,
                Constellation.Sagittarius * 30 + 14,
            ],
            [Constellation.Capricorn * 30, Constellation.Capricorn * 30 + 6],
            [
                Constellation.Aquarius * 30 + 12,
                Constellation.Aquarius * 30 + 20,
            ],
            [Constellation.Pisce * 30, Constellation.Pisce * 30 + 8],
        ],
    },
    MERCURY: {
        EGYPTIAN: [
            [Constellation.Aries * 30 + 12, Constellation.Aries * 30 + 20],
            [Constellation.Taurus * 30 + 8, Constellation.Taurus * 30 + 14],
            [Constellation.Gemini * 30, Constellation.Gemini * 30 + 6],
            [Constellation.Cancer * 30 + 13, Constellation.Cancer * 30 + 19],
            [Constellation.Leo * 30 + 18, Constellation.Leo * 30 + 24],
            [Constellation.Virgo * 30, Constellation.Virgo * 30 + 7],
            [Constellation.Libra * 30 + 6, Constellation.Libra * 30 + 14],
            [Constellation.Scorpio * 30 + 11, Constellation.Scorpio * 30 + 19],
            [
                Constellation.Sagittarius * 30 + 17,
                Constellation.Sagittarius * 30 + 21,
            ],
            [Constellation.Capricorn * 30, Constellation.Capricorn * 30 + 7],
            [Constellation.Aquarius * 30, Constellation.Aquarius * 30 + 7],
            [Constellation.Pisce * 30 + 16, Constellation.Pisce * 30 + 19],
        ],
        PTOLEMAIC: [
            [Constellation.Aries * 30 + 14, Constellation.Aries * 30 + 21],
            [Constellation.Taurus * 30 + 8, Constellation.Taurus * 30 + 15],
            [Constellation.Gemini * 30, Constellation.Gemini * 30 + 7],
            [Constellation.Cancer * 30 + 13, Constellation.Cancer * 30 + 20],
            [Constellation.Leo * 30 + 6, Constellation.Leo * 30 + 13],
            [Constellation.Virgo * 30, Constellation.Virgo * 30 + 7],
            [Constellation.Libra * 30 + 19, Constellation.Libra * 30 + 24],
            [Constellation.Scorpio * 30 + 21, Constellation.Scorpio * 30 + 27],
            [
                Constellation.Sagittarius * 30 + 14,
                Constellation.Sagittarius * 30 + 19,
            ],
            [
                Constellation.Capricorn * 30 + 6,
                Constellation.Capricorn * 30 + 12,
            ],
            [Constellation.Aquarius * 30 + 6, Constellation.Aquarius * 30 + 12],
            [Constellation.Pisce * 30 + 14, Constellation.Pisce * 30 + 20],
        ],
    },
    MOON: {
        EGYPTIAN: [],
        PTOLEMAIC: [],
    },
};

const Decan = {
    SATURN: {
        CHALDEAN: [
            [Constellation.Taurus * 30 + 20, Constellation.Taurus * 30 + 30],
            [Constellation.Leo * 30, Constellation.Leo * 30 + 10],
            [Constellation.Libra * 30 + 10, Constellation.Libra * 30 + 20],
            [
                Constellation.Sagittarius * 30 + 20,
                Constellation.Sagittarius * 30 + 30,
            ],
            [Constellation.Pisce * 30, Constellation.Pisce * 30 + 10],
        ],
        TRIPLICITY: [
            [Constellation.Taurus * 30 + 20, Constellation.Taurus * 30 + 30],
            [Constellation.Gemini * 30 + 20, Constellation.Gemini * 30 + 30],
            [Constellation.Virgo * 30 + 10, Constellation.Virgo * 30 + 20],
            [Constellation.Libra * 30 + 10, Constellation.Libra * 30 + 20],
            [Constellation.Capricorn * 30, Constellation.Capricorn * 30 + 10],
            [Constellation.Aquarius * 30, Constellation.Aquarius * 30 + 10],
        ],
    },
    JUPITER: {
        CHALDEAN: [
            [Constellation.Gemini * 30, Constellation.Gemini * 30 + 10],
            [Constellation.Leo * 30 + 10, Constellation.Leo * 30 + 20],
            [Constellation.Libra * 30 + 20, Constellation.Libra * 30 + 30],
            [Constellation.Capricorn * 30, Constellation.Capricorn * 30 + 10],
            [Constellation.Pisce * 30 + 10, Constellation.Pisce * 30 + 20],
        ],
        TRIPLICITY: [
            [Constellation.Aries * 30 + 20, Constellation.Aries * 30 + 30],
            [Constellation.Cancer * 30, +20, Constellation.Cancer * 30 + 30],
            [Constellation.Leo * 30 + 10, Constellation.Leo * 30 + 20],
            [Constellation.Scorpio * 30 + 10, Constellation.Scorpio * 30 + 20],
            [
                Constellation.Sagittarius * 30,
                Constellation.Sagittarius * 30 + 10,
            ],
            [Constellation.Pisce * 30, Constellation.Pisce * 30 + 10],
        ],
    },
    MARS: {
        CHALDEAN: [
            [Constellation.Aries * 30, Constellation.Aries * 30 + 10],
            [Constellation.Gemini * 30 + 10, Constellation.Gemini * 30 + 20],
            [Constellation.Leo * 30 + 20, Constellation.Leo * 30 + 30],
            [Constellation.Scorpio * 30, Constellation.Scorpio * 30 + 10],
            [
                Constellation.Capricorn * 30 + 10,
                Constellation.Capricorn * 30 + 20,
            ],
            [Constellation.Pisce * 30 + 20, Constellation.Pisce * 30 + 30],
        ],
        TRIPLICITY: [
            [Constellation.Aries * 30, Constellation.Aries * 30 + 10],
            [Constellation.Cancer * 30 + 10, Constellation.Cancer * 30 + 20],
            [Constellation.Leo * 30 + 20, Constellation.Leo * 30 + 30],
            [Constellation.Scorpio * 30, Constellation.Scorpio * 30 + 10],
            [
                Constellation.Sagittarius * 30 + 10,
                Constellation.Sagittarius * 30 + 20,
            ],
            [Constellation.Pisce * 30 + 20, Constellation.Pisce * 30 + 30],
        ],
    },
    SUN: {
        CHALDEAN: [
            [Constellation.Aries * 30 + 10, Constellation.Aries * 30 + 20],
            [Constellation.Gemini * 30 + 20, Constellation.Gemini * 30 + 30],
            [Constellation.Virgo * 30, Constellation.Virgo * 30 + 10],
            [Constellation.Scorpio * 30 + 10, Constellation.Scorpio * 30 + 20],
            [
                Constellation.Capricorn * 30 + 20,
                Constellation.Capricorn * 30 + 30,
            ],
        ],
        TRIPLICITY: [
            [Constellation.Aries * 30 + 10, Constellation.Aries * 30 + 20],
            [Constellation.Leo * 30, Constellation.Leo * 30 + 10],
            [
                Constellation.Sagittarius * 30 + 20,
                Constellation.Sagittarius * 30 + 30,
            ],
        ],
    },
    VENUS: {
        CHALDEAN: [
            [Constellation.Aries * 30 + 20, Constellation.Aries * 30 + 30],
            [Constellation.Cancer * 30, Constellation.Cancer * 30 + 10],
            [Constellation.Virgo * 30 + 10, Constellation.Virgo * 30 + 20],
            [Constellation.Scorpio * 30 + 20, Constellation.Scorpio * 30 + 30],
            [Constellation.Aquarius * 30, Constellation.Aquarius * 30 + 10],
        ],
        TRIPLICITY: [
            [Constellation.Taurus * 30, Constellation.Taurus * 30 + 10],
            [Constellation.Gemini * 30 + 10, Constellation.Gemini * 30 + 20],
            [Constellation.Virgo * 30 + 20, Constellation.Virgo * 30 + 30],
            [Constellation.Libra * 30, Constellation.Libra * 30 + 10],
            [
                Constellation.Capricorn * 30 + 10,
                Constellation.Capricorn * 30 + 20,
            ],
            [
                Constellation.Aquarius * 30 + 20,
                Constellation.Aquarius * 30 + 30,
            ],
        ],
    },
    MERCURY: {
        CHALDEAN: [
            [Constellation.Taurus * 30, Constellation.Taurus * 30 + 10],
            [Constellation.Cancer * 30 + 10, Constellation.Cancer * 30 + 20],
            [Constellation.Virgo * 30 + 20, Constellation.Virgo * 30 + 30],
            [
                Constellation.Sagittarius * 30,
                Constellation.Sagittarius * 30 + 10,
            ],
            [
                Constellation.Aquarius * 30 + 10,
                Constellation.Aquarius * 30 + 20,
            ],
        ],
        TRIPLICITY: [
            [Constellation.Taurus * 30 + 10, Constellation.Taurus * 30 + 20],
            [Constellation.Gemini * 30, Constellation.Gemini * 30 + 10],
            [Constellation.Virgo * 30, Constellation.Virgo * 30 + 10],
            [Constellation.Libra * 30 + 20, Constellation.Libra * 30 + 30],
            [
                Constellation.Capricorn * 30 + 20,
                Constellation.Capricorn * 30 + 30,
            ],
            [
                Constellation.Aquarius * 30 + 10,
                Constellation.Aquarius * 30 + 20,
            ],
        ],
    },
    MOON: {
        CHALDEAN: [
            [Constellation.Taurus * 30 + 10, Constellation.Taurus * 30 + 20],
            [Constellation.Cancer * 30 + 20, Constellation.Cancer * 30 + 30],
            [Constellation.Libra * 30, Constellation.Libra * 30 + 10],
            [
                Constellation.Sagittarius * 30 + 10,
                Constellation.Sagittarius * 30 + 20,
            ],
            [
                Constellation.Aquarius * 30 + 20,
                Constellation.Aquarius * 30 + 30,
            ],
        ],
        TRIPLICITY: [
            [Constellation.Cancer * 30, Constellation.Cancer * 30 + 10],
            [Constellation.Scorpio * 30 + 20, Constellation.Scorpio * 30 + 30],
            [Constellation.Pisce * 30 + 10, Constellation.Pisce * 30 + 20],
        ],
    },
};

const Fall = {
    SATURN: [[Constellation.Aries * 30, Constellation.Taurus * 30]],
    JUPITER: [[Constellation.Capricorn * 30, Constellation.Aquarius * 30]],
    MARS: [[Constellation.Cancer * 30, Constellation.Leo * 30]],
    SUN: [[Constellation.Libra * 30, Constellation.Scorpio * 30]],
    VENUS: [[Constellation.Virgo * 30, Constellation.Libra * 30]],
    MERCURY: [[Constellation.Pisce * 30, 360]],
    MOON: [[Constellation.Scorpio * 30, Constellation.Sagittarius * 30]],
};

const Detriment = {
    SATURN: [
        [Constellation.Cancer * 30, Constellation.Leo * 30],
        [Constellation.Leo * 30, Constellation.Virgo * 30],
    ],
    JUPITER: [
        [Constellation.Gemini * 30, Constellation.Cancer * 30],
        [Constellation.Virgo * 30, Constellation.Libra * 30],
    ],
    MARS: [
        [Constellation.Taurus * 30, Constellation.Gemini * 30],
        [Constellation.Libra * 30, Constellation.Scorpio * 30],
    ],
    SUN: [[Constellation.Aquarius * 30, Constellation.Pisce * 30]],
    VENUS: [
        [Constellation.Aries * 30, Constellation.Taurus * 30],
        [Constellation.Scorpio * 30, Constellation.Sagittarius * 30],
    ],
    MERCURY: [
        [Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
        [Constellation.Pisce * 30, 360],
    ],
    MOON: [[Constellation.Capricorn * 30, Constellation.Aquarius * 30]],
};

const House = {
    PLACIDUS: 'P',
    KOCH: 'K',
    REGIOMONTANUS: 'R',
    CAMPANUS: 'C',
    EQUAL: 'E',
    WHOLE_SIGN: 'W',
    MERIDIAN: 'X',
    MORINUS: 'M',
    HORIZONTAL: 'H',
    PAGE_POLICH: 'T',
    ALCABITIUS: 'B',
    PORPHYRY: 'O',
};

const IFlag = {
    'JPLEPH': core.SEFLG_JPLEPH,
    'SWIEPH': core.SEFLG_SWIEPH,
    'MOSEPH': core.SEFLG_MOSEPH,
    'HELCTR': core.SEFLG_HELCTR,
    'TRUEPOS': core.SEFLG_TRUEPOS,
    'J2000': core.SEFLG_J2000,
    'NONUT': core.SEFLG_NONUT,
    'SPEED3': core.SEFLG_SPEED3,
    'SPEED': core.SEFLG_SPEED,
    'NOGDEFL': core.SEFLG_NOGDEFL,
    'NOABERR': core.SEFLG_NOABERR,
    'ASTROMETRIC': core.SEFLG_ASTROMETRIC,
    'EQUATORIAL': core.SEFLG_EQUATORIAL,
    'XYZ': core.SEFLG_XYZ,
    'RADIANS': core.SEFLG_RADIANS,
    'BARYCTR': core.SEFLG_BARYCTR,
    'TOPOCTR': core.SEFLG_TOPOCTR,
    'SIDEREAL': core.SEFLG_SIDEREAL,
    'ICRS': core.SEFLG_ICRS,
    'DPSIDEPS_1980': core.SEFLG_DPSIDEPS_1980,
    'JPLHOR SEFLG_DPSIDEPS_1980': core.SEFLG_JPLHOR,
    'JPLHOR_APPROX': core.SEFLG_JPLHOR_APPROX,
    'CENTER_BODY': core.SEFLG_CENTER_BODY,
};

export {
    Decan,
    Detriment,
    Dignity,
    Exaltation,
    Fall,
    House,
    IFlag,
    Moiety,
    Planet,
    Rulership,
    Term,
    Triplicity,
    Constellation,
    Lot,
};
