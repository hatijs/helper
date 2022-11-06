import core from '@hatijs/core';

const SPEED = {
    AVERAGE: {
        DIRECT: {
            SATURN: (0 * 60 * 60 + 4 * 60 + 51) / (60 * 60),    // 00 04' 51"
            JUPITER: (0 * 60 * 60 + 9 * 60 + 18) / (60 * 60),   // 00 09' 18"
            MARS: (0 * 60 * 60 + 36 * 60 + 8) / (60 * 60),      // 00 36' 08"
            SUN: (0 * 60 * 60 + 59 * 60 + 8) / (60 * 60),       // 00 59' 08"
            VENUS: (1 * 60 * 60 + 5 * 60 + 31) / (60 * 60),     // 01 05' 31"
            MERCURY: (1 * 60 * 60 + 21 * 60 + 45) / (60 * 60),  // 01 21' 45"
            MOON: (13 * 60 * 60 + 10 * 60 + 35) / (60 * 60),    // 13 10' 35"
        },
        RETROGRADE: {
            SATURN: -1 * (0 * 60 * 60 + 2 * 60 + 57) / (60 * 60),       // - 00 02' 57"
            JUPITER: -1 * (0 * 60 * 60 + 4 * 60 + 57) / (60 * 60),      // - 00 04' 57"
            MARS: -1 * (0 * 60 * 60 + 13 * 60 + 22) / (60 * 60),        // - 00 13' 22"
            VENUS: -1 * (0 * 60 * 60 + 22 * 60 + 50) / (60 * 60),       // - 00 22' 50"
            MERCURY: -1 * (0 * 60 * 60 + 36 * 60 + 17) / (60 * 60),     // - 00 36' 17"
        },
    },
    HIGHEST: {
        SATURN: (0 * 60 * 60 + 8 * 60 + 4) / (60 * 60),     // 00 08' 04"
        JUPITER: (0 * 60 * 60 + 14 * 60 + 34) / (60 * 60),  // 00 14' 34"
        MARS: (0 * 60 * 60 + 47 * 60 + 29) / (60 * 60),     // 00 47' 29"
        SUN: (1 * 60 * 60 + 1 * 60 + 13) / (60 * 60),       // 01 01' 13"
        VENUS: (1 * 60 * 60 + 15 * 60 + 36) / (60 * 60),    // 01 15' 36"
        MERCURY: (2 * 60 * 60 + 12 * 60 + 13) / (60 * 60),  // 02 12' 13"
        MOON: (15 * 60 * 60 + 24 * 60 + 3) / (60 * 60),     // 15 24' 03"
    },
    LOWEST: {
        SATURN: -1 * (0 * 60 * 60 + 4 * 60 + 59) / (60 * 60),   // - 00 04' 59"
        JUPITER: -1 * (0 * 60 * 60 + 8 * 60 + 12) / (60 * 60),  // - 00 08' 12"
        MARS: -1 * (0 * 60 * 60 + 24 * 60 + 7) / (60 * 60),     // - 00 24' 07"
        SUN: (0 * 60 * 60 + 57 * 60 + 9) / (60 * 60),           // + 00 57' 09"
        VENUS: -1 * (0 * 60 * 60 + 37 * 60 + 59) / (60 * 60),   // - 00 37' 59"
        MERCURY: -1 * (1 * 60 * 60 + 23 * 60 + 13) / (60 * 60), // - 01 23' 13"
        MOON: (11 * 60 * 60 + 45 * 60 + 33) / (60 * 60),        // + 11 45' 33"
    },
};

const CHALDEAN_ORDER = {
    SATURN: <'SATURN'>'SATURN',
    JUPITER: <'JUPITER'>'JUPITER',
    MARS: <'MARS'>'MARS',
    SUN: <'SUN'>'SUN',
    VENUS: <'VENUS'>'VENUS',
    MERCURY: <'MERCURY'>'MERCURY',
    MOON: <'MOON'>'MOON',
};

enum CONSTELLATION {
    'ARIES',
    'TAURUS',
    'GEMINI',
    'CANCER',
    'LEO',
    'VIRGO',
    'LIBRA',
    'SCORPIO',
    'SAGITTARIUS',
    'CAPRICORN',
    'AQUARIUS',
    'PISCE',
}

const PLANET = {
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

const LOT = {
    ACQUISITION: <'ACQUISITION'>'ACQUISITION',
    BASIS: <'BASIS'>'BASIS',
    EXALTATION: <'EXALTATION'>'EXALTATION',
    FORTUNE: <'FORTUNE'>'FORTUNE',
    SPIRIT: <'SPIRIT'>'SPIRIT',
};

const MOIETY = {
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

const DIGNITY = {
    RULERSHIP: <'RULERSHIP'>'RULERSHIP',
    EXALTATION: <'EXALTATION'>'EXALTATION',
    TRIPLICITY: <'TRIPLICITY'>'TRIPLICITY',
    TERM: <'TERM'>'TERM',
    DECAN: <'DECAN'>'DECAN',
    FALL: <'FALL'>'FALL',
    DETRIMENT: <'DETRIMENT'>'DETRIMENT',
};

const RULERSHIP = {
    SATURN: [
        [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
        [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
    ],
    JUPITER: [
        [CONSTELLATION.SAGITTARIUS * 30, CONSTELLATION.CAPRICORN * 30],
        [CONSTELLATION.PISCE * 30, 360],
    ],
    MARS: [
        [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
        [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SAGITTARIUS * 30],
    ],
    SUN: [[CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30]],
    VENUS: [
        [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
        [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
    ],
    MERCURY: [
        [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
        [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
    ],
    MOON: [[CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30]],
};

const EXALTATION = {
    SATURN: [[CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30]],
    JUPITER: [[CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30]],
    MARS: [[CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30]],
    SUN: [[CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30]],
    VENUS: [[CONSTELLATION.PISCE * 30, 360]],
    MERCURY: [[CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30]],
    MOON: [[CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30]],
};

const TRIPLICITY = {
    SATURN: {
        DOROTHEAN: [
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
            ],
            [
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
            ],
        ],
        MORINUS: [
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
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
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
            ],
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
            ],
        ],
        MORINUS: [
            [
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
            ],
            [
                [],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
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
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
            ],
            [
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
            ],
        ],
        MORINUS: [
            [
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
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
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
            [
                [],
                [],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
        ],
    },
    SUN: {
        DOROTHEAN: [
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
            ],
        ],
        MORINUS: [
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
                    ],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
                    [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
                    [
                        CONSTELLATION.SAGITTARIUS * 30,
                        CONSTELLATION.CAPRICORN * 30,
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
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
                [],
            ],
            [
                [],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
            ],
        ],
        MORINUS: [
            [
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
            ],
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
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
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
                [],
            ],
        ],
        MORINUS: [
            [
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
            ],
            [
                [],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [],
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
                    [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
                    [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30],
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
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
            [
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
        ],
        MORINUS: [
            [
                [],
                [],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
            [
                [],
                [],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
            ],
        ],
        PTOLEMAIC: [
            [
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [],
            ],
            [
                [
                    [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
                    [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
                    [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30],
                ],
                [
                    [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
                    [
                        CONSTELLATION.SCORPIO * 30,
                        CONSTELLATION.SAGITTARIUS * 30,
                    ],
                    [CONSTELLATION.PISCE * 30, 360],
                ],
                [],
            ],
        ],
    },
};

const TERM = {
    SATURN: {
        EGYPTIAN: [
            [CONSTELLATION.ARIES * 30 + 25, CONSTELLATION.ARIES * 30 + 30],
            [CONSTELLATION.TAURUS * 30 + 22, CONSTELLATION.TAURUS * 30 + 27],
            [CONSTELLATION.GEMINI * 30 + 24, CONSTELLATION.GEMINI * 30 + 30],
            [CONSTELLATION.CANCER * 30 + 26, CONSTELLATION.CANCER * 30 + 30],
            [CONSTELLATION.LEO * 30 + 11, CONSTELLATION.LEO * 30 + 18],
            [CONSTELLATION.VIRGO * 30 + 28, CONSTELLATION.VIRGO * 30 + 30],
            [CONSTELLATION.LIBRA * 30, CONSTELLATION.LIBRA * 30 + 6],
            [CONSTELLATION.SCORPIO * 30 + 24, CONSTELLATION.SCORPIO * 30 + 30],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 21,
                CONSTELLATION.SAGITTARIUS * 30 + 26,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 22,
                CONSTELLATION.CAPRICORN * 30 + 26,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 25,
                CONSTELLATION.AQUARIUS * 30 + 30,
            ],
            [CONSTELLATION.PISCE * 30 + 28, CONSTELLATION.PISCE * 30 + 30],
        ],
        PTOLEMAIC: [
            [CONSTELLATION.ARIES * 30 + 26, CONSTELLATION.ARIES * 30 + 30],
            [CONSTELLATION.TAURUS * 30 + 22, CONSTELLATION.TAURUS * 30 + 26],
            [CONSTELLATION.GEMINI * 30 + 21, CONSTELLATION.GEMINI * 30 + 25],
            [CONSTELLATION.CANCER * 30 + 27, CONSTELLATION.CANCER * 30 + 30],
            [CONSTELLATION.LEO * 30, CONSTELLATION.LEO * 30 + 6],
            [CONSTELLATION.VIRGO * 30 + 18, CONSTELLATION.VIRGO * 30 + 24],
            [CONSTELLATION.LIBRA * 30, CONSTELLATION.LIBRA * 30 + 6],
            [CONSTELLATION.SCORPIO * 30 + 27, CONSTELLATION.SCORPIO * 30 + 30],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 19,
                CONSTELLATION.SAGITTARIUS * 30 + 25,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 25,
                CONSTELLATION.CAPRICORN * 30 + 30,
            ],
            [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.AQUARIUS * 30 + 6],
            [CONSTELLATION.PISCE * 30 + 26, CONSTELLATION.PISCE * 30 + 30],
        ],
    },
    JUPITER: {
        EGYPTIAN: [
            [CONSTELLATION.ARIES * 30, CONSTELLATION.ARIES * 30 + 6],
            [CONSTELLATION.TAURUS * 30 + 14, CONSTELLATION.TAURUS * 30 + 22],
            [CONSTELLATION.GEMINI * 30 + 6, CONSTELLATION.GEMINI * 30 + 12],
            [CONSTELLATION.CANCER * 30 + 19, CONSTELLATION.CANCER * 30 + 26],
            [CONSTELLATION.LEO * 30, CONSTELLATION.LEO * 30 + 6],
            [CONSTELLATION.VIRGO * 30 + 17, CONSTELLATION.VIRGO * 30 + 21],
            [CONSTELLATION.LIBRA * 30 + 14, CONSTELLATION.LIBRA * 30 + 21],
            [CONSTELLATION.SCORPIO * 30 + 19, CONSTELLATION.SCORPIO * 30 + 24],
            [
                CONSTELLATION.SAGITTARIUS * 30,
                CONSTELLATION.SAGITTARIUS * 30 + 12,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 7,
                CONSTELLATION.CAPRICORN * 30 + 14,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 13,
                CONSTELLATION.AQUARIUS * 30 + 20,
            ],
            [CONSTELLATION.PISCE * 30 + 12, CONSTELLATION.PISCE * 30 + 16],
        ],
        PTOLEMAIC: [
            [CONSTELLATION.ARIES * 30, CONSTELLATION.ARIES * 30 + 6],
            [CONSTELLATION.TAURUS * 30 + 15, CONSTELLATION.TAURUS * 30 + 22],
            [CONSTELLATION.GEMINI * 30 + 7, CONSTELLATION.GEMINI * 30 + 13],
            [CONSTELLATION.CANCER * 30 + 6, CONSTELLATION.CANCER * 30 + 13],
            [CONSTELLATION.LEO * 30 + 19, CONSTELLATION.LEO * 30 + 25],
            [CONSTELLATION.VIRGO * 30 + 13, CONSTELLATION.VIRGO * 30 + 18],
            [CONSTELLATION.LIBRA * 30 + 11, CONSTELLATION.LIBRA * 30 + 19],
            [CONSTELLATION.SCORPIO * 30 + 6, CONSTELLATION.SCORPIO * 30 + 14],
            [
                CONSTELLATION.SAGITTARIUS * 30,
                CONSTELLATION.SAGITTARIUS * 30 + 8,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 12,
                CONSTELLATION.CAPRICORN * 30 + 19,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 20,
                CONSTELLATION.AQUARIUS * 30 + 25,
            ],
            [CONSTELLATION.PISCE * 30 + 8, CONSTELLATION.PISCE * 30 + 14],
        ],
    },
    MARS: {
        EGYPTIAN: [
            [CONSTELLATION.ARIES * 30 + 20, CONSTELLATION.ARIES * 30 + 25],
            [CONSTELLATION.TAURUS * 30 + 27, CONSTELLATION.TAURUS * 30 + 30],
            [CONSTELLATION.GEMINI * 30 + 17, CONSTELLATION.GEMINI * 30 + 24],
            [CONSTELLATION.CANCER * 30, CONSTELLATION.CANCER * 30 + 7],
            [CONSTELLATION.LEO * 30 + 24, CONSTELLATION.LEO * 30 + 30],
            [CONSTELLATION.VIRGO * 30 + 21, CONSTELLATION.VIRGO * 30 + 28],
            [CONSTELLATION.LIBRA * 30 + 28, CONSTELLATION.LIBRA * 30 + 30],
            [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SCORPIO * 30 + 7],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 26,
                CONSTELLATION.SAGITTARIUS * 30 + 30,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 26,
                CONSTELLATION.CAPRICORN * 30 + 30,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 20,
                CONSTELLATION.AQUARIUS * 30 + 25,
            ],
            [CONSTELLATION.PISCE * 30 + 19, CONSTELLATION.PISCE * 30 + 28],
        ],
        PTOLEMAIC: [
            [CONSTELLATION.ARIES * 30 + 21, CONSTELLATION.ARIES * 30 + 26],
            [CONSTELLATION.TAURUS * 30 + 26, CONSTELLATION.TAURUS * 30 + 30],
            [CONSTELLATION.GEMINI * 30 + 25, CONSTELLATION.GEMINI * 30 + 30],
            [CONSTELLATION.CANCER * 30, CONSTELLATION.CANCER * 30 + 6],
            [CONSTELLATION.LEO * 30 + 25, CONSTELLATION.LEO * 30 + 30],
            [CONSTELLATION.VIRGO * 30 + 24, CONSTELLATION.VIRGO * 30 + 30],
            [CONSTELLATION.LIBRA * 30 + 24, CONSTELLATION.LIBRA * 30 + 30],
            [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SCORPIO * 30 + 6],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 25,
                CONSTELLATION.SAGITTARIUS * 30 + 30,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 19,
                CONSTELLATION.CAPRICORN * 30 + 25,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 25,
                CONSTELLATION.AQUARIUS * 30 + 30,
            ],
            [CONSTELLATION.PISCE * 30 + 20, CONSTELLATION.PISCE * 30 + 26],
        ],
    },
    SUN: {
        EGYPTIAN: [],
        PTOLEMAIC: [],
    },
    VENUS: {
        EGYPTIAN: [
            [CONSTELLATION.ARIES * 30 + 6, CONSTELLATION.ARIES * 30 + 12],
            [CONSTELLATION.TAURUS * 30, CONSTELLATION.TAURUS * 30 + 8],
            [CONSTELLATION.GEMINI * 30 + 12, CONSTELLATION.GEMINI * 30 + 17],
            [CONSTELLATION.CANCER * 30 + 7, CONSTELLATION.CANCER * 30 + 13],
            [CONSTELLATION.LEO * 30 + 6, CONSTELLATION.LEO * 30 + 11],
            [CONSTELLATION.VIRGO * 30 + 7, CONSTELLATION.VIRGO * 30 + 17],
            [CONSTELLATION.LIBRA * 30 + 21, CONSTELLATION.LIBRA * 30 + 28],
            [CONSTELLATION.SCORPIO * 30 + 7, CONSTELLATION.SCORPIO * 30 + 11],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 12,
                CONSTELLATION.SAGITTARIUS * 30 + 17,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 14,
                CONSTELLATION.CAPRICORN * 30 + 22,
            ],
            [CONSTELLATION.AQUARIUS * 30 + 7, CONSTELLATION.AQUARIUS * 30 + 13],
            [CONSTELLATION.PISCE * 30, CONSTELLATION.PISCE * 30 + 12],
        ],
        PTOLEMAIC: [
            [CONSTELLATION.ARIES * 30 + 6, CONSTELLATION.ARIES * 30 + 14],
            [CONSTELLATION.TAURUS * 30, CONSTELLATION.TAURUS * 30 + 8],
            [CONSTELLATION.GEMINI * 30 + 14, CONSTELLATION.GEMINI * 30 + 21],
            [CONSTELLATION.CANCER * 30 + 20, CONSTELLATION.CANCER * 30 + 27],
            [CONSTELLATION.LEO * 30 + 13, CONSTELLATION.LEO * 30 + 19],
            [CONSTELLATION.VIRGO * 30 + 7, CONSTELLATION.VIRGO * 30 + 13],
            [CONSTELLATION.LIBRA * 30 + 6, CONSTELLATION.LIBRA * 30 + 11],
            [CONSTELLATION.SCORPIO * 30 + 14, CONSTELLATION.SCORPIO * 30 + 21],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 8,
                CONSTELLATION.SAGITTARIUS * 30 + 14,
            ],
            [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.CAPRICORN * 30 + 6],
            [
                CONSTELLATION.AQUARIUS * 30 + 12,
                CONSTELLATION.AQUARIUS * 30 + 20,
            ],
            [CONSTELLATION.PISCE * 30, CONSTELLATION.PISCE * 30 + 8],
        ],
    },
    MERCURY: {
        EGYPTIAN: [
            [CONSTELLATION.ARIES * 30 + 12, CONSTELLATION.ARIES * 30 + 20],
            [CONSTELLATION.TAURUS * 30 + 8, CONSTELLATION.TAURUS * 30 + 14],
            [CONSTELLATION.GEMINI * 30, CONSTELLATION.GEMINI * 30 + 6],
            [CONSTELLATION.CANCER * 30 + 13, CONSTELLATION.CANCER * 30 + 19],
            [CONSTELLATION.LEO * 30 + 18, CONSTELLATION.LEO * 30 + 24],
            [CONSTELLATION.VIRGO * 30, CONSTELLATION.VIRGO * 30 + 7],
            [CONSTELLATION.LIBRA * 30 + 6, CONSTELLATION.LIBRA * 30 + 14],
            [CONSTELLATION.SCORPIO * 30 + 11, CONSTELLATION.SCORPIO * 30 + 19],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 17,
                CONSTELLATION.SAGITTARIUS * 30 + 21,
            ],
            [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.CAPRICORN * 30 + 7],
            [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.AQUARIUS * 30 + 7],
            [CONSTELLATION.PISCE * 30 + 16, CONSTELLATION.PISCE * 30 + 19],
        ],
        PTOLEMAIC: [
            [CONSTELLATION.ARIES * 30 + 14, CONSTELLATION.ARIES * 30 + 21],
            [CONSTELLATION.TAURUS * 30 + 8, CONSTELLATION.TAURUS * 30 + 15],
            [CONSTELLATION.GEMINI * 30, CONSTELLATION.GEMINI * 30 + 7],
            [CONSTELLATION.CANCER * 30 + 13, CONSTELLATION.CANCER * 30 + 20],
            [CONSTELLATION.LEO * 30 + 6, CONSTELLATION.LEO * 30 + 13],
            [CONSTELLATION.VIRGO * 30, CONSTELLATION.VIRGO * 30 + 7],
            [CONSTELLATION.LIBRA * 30 + 19, CONSTELLATION.LIBRA * 30 + 24],
            [CONSTELLATION.SCORPIO * 30 + 21, CONSTELLATION.SCORPIO * 30 + 27],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 14,
                CONSTELLATION.SAGITTARIUS * 30 + 19,
            ],
            [
                CONSTELLATION.CAPRICORN * 30 + 6,
                CONSTELLATION.CAPRICORN * 30 + 12,
            ],
            [CONSTELLATION.AQUARIUS * 30 + 6, CONSTELLATION.AQUARIUS * 30 + 12],
            [CONSTELLATION.PISCE * 30 + 14, CONSTELLATION.PISCE * 30 + 20],
        ],
    },
    MOON: {
        EGYPTIAN: [],
        PTOLEMAIC: [],
    },
};

const DECAN = {
    SATURN: {
        CHALDEAN: [
            [CONSTELLATION.TAURUS * 30 + 20, CONSTELLATION.TAURUS * 30 + 30],
            [CONSTELLATION.LEO * 30, CONSTELLATION.LEO * 30 + 10],
            [CONSTELLATION.LIBRA * 30 + 10, CONSTELLATION.LIBRA * 30 + 20],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 20,
                CONSTELLATION.SAGITTARIUS * 30 + 30,
            ],
            [CONSTELLATION.PISCE * 30, CONSTELLATION.PISCE * 30 + 10],
        ],
        TRIPLICITY: [
            [CONSTELLATION.TAURUS * 30 + 20, CONSTELLATION.TAURUS * 30 + 30],
            [CONSTELLATION.GEMINI * 30 + 20, CONSTELLATION.GEMINI * 30 + 30],
            [CONSTELLATION.VIRGO * 30 + 10, CONSTELLATION.VIRGO * 30 + 20],
            [CONSTELLATION.LIBRA * 30 + 10, CONSTELLATION.LIBRA * 30 + 20],
            [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.CAPRICORN * 30 + 10],
            [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.AQUARIUS * 30 + 10],
        ],
    },
    JUPITER: {
        CHALDEAN: [
            [CONSTELLATION.GEMINI * 30, CONSTELLATION.GEMINI * 30 + 10],
            [CONSTELLATION.LEO * 30 + 10, CONSTELLATION.LEO * 30 + 20],
            [CONSTELLATION.LIBRA * 30 + 20, CONSTELLATION.LIBRA * 30 + 30],
            [CONSTELLATION.CAPRICORN * 30, CONSTELLATION.CAPRICORN * 30 + 10],
            [CONSTELLATION.PISCE * 30 + 10, CONSTELLATION.PISCE * 30 + 20],
        ],
        TRIPLICITY: [
            [CONSTELLATION.ARIES * 30 + 20, CONSTELLATION.ARIES * 30 + 30],
            [CONSTELLATION.CANCER * 30, +20, CONSTELLATION.CANCER * 30 + 30],
            [CONSTELLATION.LEO * 30 + 10, CONSTELLATION.LEO * 30 + 20],
            [CONSTELLATION.SCORPIO * 30 + 10, CONSTELLATION.SCORPIO * 30 + 20],
            [
                CONSTELLATION.SAGITTARIUS * 30,
                CONSTELLATION.SAGITTARIUS * 30 + 10,
            ],
            [CONSTELLATION.PISCE * 30, CONSTELLATION.PISCE * 30 + 10],
        ],
    },
    MARS: {
        CHALDEAN: [
            [CONSTELLATION.ARIES * 30, CONSTELLATION.ARIES * 30 + 10],
            [CONSTELLATION.GEMINI * 30 + 10, CONSTELLATION.GEMINI * 30 + 20],
            [CONSTELLATION.LEO * 30 + 20, CONSTELLATION.LEO * 30 + 30],
            [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SCORPIO * 30 + 10],
            [
                CONSTELLATION.CAPRICORN * 30 + 10,
                CONSTELLATION.CAPRICORN * 30 + 20,
            ],
            [CONSTELLATION.PISCE * 30 + 20, CONSTELLATION.PISCE * 30 + 30],
        ],
        TRIPLICITY: [
            [CONSTELLATION.ARIES * 30, CONSTELLATION.ARIES * 30 + 10],
            [CONSTELLATION.CANCER * 30 + 10, CONSTELLATION.CANCER * 30 + 20],
            [CONSTELLATION.LEO * 30 + 20, CONSTELLATION.LEO * 30 + 30],
            [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SCORPIO * 30 + 10],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 10,
                CONSTELLATION.SAGITTARIUS * 30 + 20,
            ],
            [CONSTELLATION.PISCE * 30 + 20, CONSTELLATION.PISCE * 30 + 30],
        ],
    },
    SUN: {
        CHALDEAN: [
            [CONSTELLATION.ARIES * 30 + 10, CONSTELLATION.ARIES * 30 + 20],
            [CONSTELLATION.GEMINI * 30 + 20, CONSTELLATION.GEMINI * 30 + 30],
            [CONSTELLATION.VIRGO * 30, CONSTELLATION.VIRGO * 30 + 10],
            [CONSTELLATION.SCORPIO * 30 + 10, CONSTELLATION.SCORPIO * 30 + 20],
            [
                CONSTELLATION.CAPRICORN * 30 + 20,
                CONSTELLATION.CAPRICORN * 30 + 30,
            ],
        ],
        TRIPLICITY: [
            [CONSTELLATION.ARIES * 30 + 10, CONSTELLATION.ARIES * 30 + 20],
            [CONSTELLATION.LEO * 30, CONSTELLATION.LEO * 30 + 10],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 20,
                CONSTELLATION.SAGITTARIUS * 30 + 30,
            ],
        ],
    },
    VENUS: {
        CHALDEAN: [
            [CONSTELLATION.ARIES * 30 + 20, CONSTELLATION.ARIES * 30 + 30],
            [CONSTELLATION.CANCER * 30, CONSTELLATION.CANCER * 30 + 10],
            [CONSTELLATION.VIRGO * 30 + 10, CONSTELLATION.VIRGO * 30 + 20],
            [CONSTELLATION.SCORPIO * 30 + 20, CONSTELLATION.SCORPIO * 30 + 30],
            [CONSTELLATION.AQUARIUS * 30, CONSTELLATION.AQUARIUS * 30 + 10],
        ],
        TRIPLICITY: [
            [CONSTELLATION.TAURUS * 30, CONSTELLATION.TAURUS * 30 + 10],
            [CONSTELLATION.GEMINI * 30 + 10, CONSTELLATION.GEMINI * 30 + 20],
            [CONSTELLATION.VIRGO * 30 + 20, CONSTELLATION.VIRGO * 30 + 30],
            [CONSTELLATION.LIBRA * 30, CONSTELLATION.LIBRA * 30 + 10],
            [
                CONSTELLATION.CAPRICORN * 30 + 10,
                CONSTELLATION.CAPRICORN * 30 + 20,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 20,
                CONSTELLATION.AQUARIUS * 30 + 30,
            ],
        ],
    },
    MERCURY: {
        CHALDEAN: [
            [CONSTELLATION.TAURUS * 30, CONSTELLATION.TAURUS * 30 + 10],
            [CONSTELLATION.CANCER * 30 + 10, CONSTELLATION.CANCER * 30 + 20],
            [CONSTELLATION.VIRGO * 30 + 20, CONSTELLATION.VIRGO * 30 + 30],
            [
                CONSTELLATION.SAGITTARIUS * 30,
                CONSTELLATION.SAGITTARIUS * 30 + 10,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 10,
                CONSTELLATION.AQUARIUS * 30 + 20,
            ],
        ],
        TRIPLICITY: [
            [CONSTELLATION.TAURUS * 30 + 10, CONSTELLATION.TAURUS * 30 + 20],
            [CONSTELLATION.GEMINI * 30, CONSTELLATION.GEMINI * 30 + 10],
            [CONSTELLATION.VIRGO * 30, CONSTELLATION.VIRGO * 30 + 10],
            [CONSTELLATION.LIBRA * 30 + 20, CONSTELLATION.LIBRA * 30 + 30],
            [
                CONSTELLATION.CAPRICORN * 30 + 20,
                CONSTELLATION.CAPRICORN * 30 + 30,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 10,
                CONSTELLATION.AQUARIUS * 30 + 20,
            ],
        ],
    },
    MOON: {
        CHALDEAN: [
            [CONSTELLATION.TAURUS * 30 + 10, CONSTELLATION.TAURUS * 30 + 20],
            [CONSTELLATION.CANCER * 30 + 20, CONSTELLATION.CANCER * 30 + 30],
            [CONSTELLATION.LIBRA * 30, CONSTELLATION.LIBRA * 30 + 10],
            [
                CONSTELLATION.SAGITTARIUS * 30 + 10,
                CONSTELLATION.SAGITTARIUS * 30 + 20,
            ],
            [
                CONSTELLATION.AQUARIUS * 30 + 20,
                CONSTELLATION.AQUARIUS * 30 + 30,
            ],
        ],
        TRIPLICITY: [
            [CONSTELLATION.CANCER * 30, CONSTELLATION.CANCER * 30 + 10],
            [CONSTELLATION.SCORPIO * 30 + 20, CONSTELLATION.SCORPIO * 30 + 30],
            [CONSTELLATION.PISCE * 30 + 10, CONSTELLATION.PISCE * 30 + 20],
        ],
    },
};

const FALL = {
    SATURN: [[CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30]],
    JUPITER: [[CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30]],
    MARS: [[CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30]],
    SUN: [[CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30]],
    VENUS: [[CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30]],
    MERCURY: [[CONSTELLATION.PISCE * 30, 360]],
    MOON: [[CONSTELLATION.SCORPIO * 30, CONSTELLATION.SAGITTARIUS * 30]],
};

const DETRIMENT = {
    SATURN: [
        [CONSTELLATION.CANCER * 30, CONSTELLATION.LEO * 30],
        [CONSTELLATION.LEO * 30, CONSTELLATION.VIRGO * 30],
    ],
    JUPITER: [
        [CONSTELLATION.GEMINI * 30, CONSTELLATION.CANCER * 30],
        [CONSTELLATION.VIRGO * 30, CONSTELLATION.LIBRA * 30],
    ],
    MARS: [
        [CONSTELLATION.TAURUS * 30, CONSTELLATION.GEMINI * 30],
        [CONSTELLATION.LIBRA * 30, CONSTELLATION.SCORPIO * 30],
    ],
    SUN: [[CONSTELLATION.AQUARIUS * 30, CONSTELLATION.PISCE * 30]],
    VENUS: [
        [CONSTELLATION.ARIES * 30, CONSTELLATION.TAURUS * 30],
        [CONSTELLATION.SCORPIO * 30, CONSTELLATION.SAGITTARIUS * 30],
    ],
    MERCURY: [
        [CONSTELLATION.SAGITTARIUS * 30, CONSTELLATION.CAPRICORN * 30],
        [CONSTELLATION.PISCE * 30, 360],
    ],
    MOON: [[CONSTELLATION.CAPRICORN * 30, CONSTELLATION.AQUARIUS * 30]],
};

const HOUSE_SYSTEM = {
    PLACIDUS: <'PLACIDUS'>'PLACIDUS',
    KOCH: <'KOCH'>'KOCH',
    REGIOMONTANUS: <'REGIOMONTANUS'>'REGIOMONTANUS',
    CAMPANUS: <'CAMPANUS'>'CAMPANUS',
    EQUAL: <'EQUAL'>'EQUAL',
    WHOLE_SIGN: <'WHOLE_SIGN'>'WHOLE_SIGN',
    MERIDIAN: <'MERIDIAN'>'MERIDIAN',
    MORINUS: <'MORINUS'>'MORINUS',
    HORIZONTAL: <'HORIZONTAL'>'HORIZONTAL',
    PAGE_POLICH: <'PAGE_POLICH'>'PAGE_POLICH',
    ALCABITIUS: <'ALCABITIUS'>'ALCABITIUS',
    PORPHYRY: <'PORPHYRY'>'PORPHYRY',
};

const HOUSE = {
    1: <'1'>'1',
    2: <'2'>'2',
    3: <'3'>'3',
    4: <'4'>'4',
    5: <'5'>'5',
    6: <'6'>'6',
    7: <'7'>'7',
    8: <'8'>'8',
    9: <'9'>'9',
    10: <'10'>'10',
    11: <'11'>'11',
    12: <'12'>'12',
};

const HOUSE_SYSTEM_SYMBOL = {
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

const I_FLAG = {
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
    CHALDEAN_ORDER,
    CONSTELLATION,
    DECAN,
    DETRIMENT,
    DIGNITY,
    EXALTATION,
    FALL,
    HOUSE,
    HOUSE_SYSTEM,
    HOUSE_SYSTEM_SYMBOL,
    I_FLAG,
    LOT,
    MOIETY,
    PLANET,
    RULERSHIP,
    SPEED,
    TERM,
    TRIPLICITY,
};
