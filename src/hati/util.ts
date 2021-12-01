import core from "@hatijs/core";

import { constant } from ".";

export const util = {
  getVersion: () => core.node_swe_version(),
  getConstellationIndexFromLongitude: (longitude: number) => Math.floor(longitude / 30),
  getConstellationIndexFromConstellationName: (constellationName: string) => Object.values(constant.Constellation).indexOf(constellationName),
  convertDegreeToDMS: (degree: number) => ({
    degree: Math.floor(degree % 30),
    minute: Math.floor((degree * 60) % 60),
    second: Math.floor((degree * 60 * 60) % 60)
  }),
  convertDegreeToPosition: (degree: number) => ({
    constellation: {
      name: constant.Constellation[util.getConstellationIndexFromLongitude(degree)]
    },
    position: {
      longitude: {
        absolute: degree,
        relative: degree - util.getConstellationIndexFromLongitude(degree) * 30,
      }
    }
  }),
};
