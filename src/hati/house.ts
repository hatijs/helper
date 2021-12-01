import core from "@hatijs/core";

import { constant, position } from ".";

export const house = (tjdUT: number, geoLon: number, geoLat: number) => {
	const getPosition = (hsys: keyof typeof constant.House) => {
		const result = core.node_swe_houses(tjdUT, geoLat, geoLon, hsys);

		if ('error' in result)
			throw new Error(result.error);

		return result;
	};

  const getPlanet = (name: keyof typeof constant.Planet, hsys: keyof typeof constant.House) => {
    const posHouse = getPosition(hsys);
    const posPlanet = position(tjdUT, geoLon, geoLat).getPlanet(name);

    const calculate = (houses: number[], planet: { longitude: number, moiety: number }) => {
      const A = houses.map((longitude) => longitude >= planet.longitude + planet.moiety);
      const B = houses.map((longitude) => longitude < planet.longitude + planet.moiety);

      if ((A.filter(v => v).length === 0 && B.filter(v => v).length === 12)) {
        return houses.map((longitude, i) => ({ i, longitude })).sort((a, b) => a.longitude > b.longitude ? -1 : 1)[0].i + 1;
      }

      for (let i = 0; i < A.length; i++) {
        if (!A[i % 12] && A[(i + 1) % 12] && B[i % 12] && !B[(i + 1) % 12] )
          return i + 1;
      }
    }

    return {
      house: {
        absolute: calculate(posHouse.house, {
          longitude: posPlanet.position.longitude.absolute,
          moiety: 0
        }),
        ruleOfMoiety: calculate(posHouse.house, {
          longitude: posPlanet.position.longitude.absolute,
          moiety: (name in constant.Moiety) ? constant.Moiety[<keyof typeof constant.Moiety>name] : 0
        }),
      }
    }
  };

	return {
		getPosition,
		getPlanet,
    isDiurnal: () => {
      const posHouse = getPosition('WHOLE_SIGN');
      const posSun = position(tjdUT, geoLon, geoLat).getPlanet('SUN');

      return !(posSun.position.longitude.absolute > posHouse.ascendant && posHouse.ascendant + 180 >= posSun.position.longitude.absolute)
    }
	};
};
