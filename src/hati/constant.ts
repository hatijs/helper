import core from "@hatijs/core";

enum Constellation {
  'Aries',
  'Taurus',
  'Cancer',
  'Gemini',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisce',
};

const Planet = {
  'ECL_NUT': core.SE_ECL_NUT,
  'SUN': core.SE_SUN,
  'MOON': core.SE_MOON,
  'MERCURY': core.SE_MERCURY,
  'VENUS': core.SE_VENUS,
  'MARS': core.SE_MARS,
  'JUPITER': core.SE_JUPITER,
  'SATURN': core.SE_SATURN,
  'URANUS': core.SE_URANUS,
  'NEPTUNE': core.SE_NEPTUNE,
  'PLUTO': core.SE_PLUTO,
  'MEAN_NODE': core.SE_MEAN_NODE,
  'TRUE_NODE': core.SE_TRUE_NODE,
  'MEAN_APOG': core.SE_MEAN_APOG,
  'OSCU_APOG': core.SE_OSCU_APOG,
  'EARTH': core.SE_EARTH,
  'CHIRON': core.SE_CHIRON,
  'PHOLUS': core.SE_PHOLUS,
  'CERES': core.SE_CERES,
  'PALLAS': core.SE_PALLAS,
  'JUNO': core.SE_JUNO,
  'VESTA': core.SE_VESTA,
  'INTP_APOG': core.SE_INTP_APOG,
  'INTP_PERG': core.SE_INTP_PERG,
  'NPLANETS': core.SE_NPLANETS,
  'FICT_OFFSET': core.SE_FICT_OFFSET,
  'NFICT_ELEM': core.SE_NFICT_ELEM,
  'PLMOON_OFFSET': core.SE_PLMOON_OFFSET,
  'AST_OFFSET': core.SE_AST_OFFSET,
  'CUPIDO': core.SE_CUPIDO,
  'HADES': core.SE_HADES,
  'ZEUS': core.SE_ZEUS,
  'KRONOS': core.SE_KRONOS,
  'APOLLON': core.SE_APOLLON,
  'ADMETOS': core.SE_ADMETOS,
  'VULKANUS': core.SE_VULKANUS,
  'POSEIDON': core.SE_POSEIDON,
  'ISIS': core.SE_ISIS,
  'NIBIRU': core.SE_NIBIRU,
  'HARRINGTON': core.SE_HARRINGTON,
  'NEPTUNE_LEVERRIER': core.SE_NEPTUNE_LEVERRIER,
  'NEPTUNE_ADAMS': core.SE_NEPTUNE_ADAMS,
  'PLUTO_LOWELL': core.SE_PLUTO_LOWELL,
  'PLUTO_PICKERING': core.SE_PLUTO_PICKERING,
}

const Moiety = {
	'SUN': 5,
  'MOON': 4.5,
  'MERCURY': 3.5,
  'VENUS': 3.5,
  'MARS': 3.5,
  'JUPITER': 3.5,
  'SATURN': 3.5,
  'URANUS': 2.5,
  'NEPTUNE': 2.5,
  'PLUTO': 2.5,
}

enum Triplicity {
	'DOROTHEAN',
	'PTOLEMAIC',
	'MORINUS',
}

enum Term {
	'EGYPTIAN',
	'PTOLEMAIC',
}

enum Decan {
	'CHALDEAN',
	'TRIPLICITY',
}

const Dignity = {
	'SUN': [
		[
			[Constellation.Leo * 30, Constellation.Virgo * 30]
		],
		[
			[Constellation.Aries * 30, Constellation.Taurus * 30]
		],
		{
			'DOROTHEAN': [
				[
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
					[],
					[],
				],
				[
					[],
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
					[],
				],
			],
			'PTOLEMAIC': [
				[
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
					[],
				],
				[
					[],
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
				],
			],
			'MORINUS': [
				[
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
					[],
					[],
				],
				[
					[],
					[
						[Constellation.Aries * 30, Constellation.Taurus * 30],
						[Constellation.Leo * 30, Constellation.Virgo * 30],
						[Constellation.Sagittarius * 30, Constellation.Capricorn * 30],
					],
					[],
				],
			],
		},
		{
			'EGYPTIAN': [],
			'PTOLEMAIC': [],
		},
		{
			'CHALDEAN': [
				[10, 20],
				[80, 90],
				[150, 160],
				[220, 230],
				[290, 300],
			],
			'TRIPLICITY': [
				[10, 20],
				[120, 130],
				[260, 270],
			],
		}
	]
}

const House = {
	'PLACIDUS': 'P',
	'KOCH': 'K',
	'REGIOMONTANUS': 'R',
	'CAMPANUS': 'C',
	'EQUAL': 'E',
	'WHOLE_SIGN': 'W',
	'MERIDIAN': 'X',
	'MORINUS': 'M',
	'HORIZONTAL': 'H',
	'PAGE_POLICH': 'T',
	'ALCABITIUS': 'B',
	'PORPHYRY': 'O',
}

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
}

export {
	Decan,
	Dignity,
	House,
	IFlag,
	Moiety,
	Term,
	Triplicity,
  Planet,
  Constellation,
};
