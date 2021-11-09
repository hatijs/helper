import core from "@hatijs/core";

import { constant } from ".";

export const util = {
  getVersion: () => core.node_swe_version(),
  getConstellationIndexFromLongitude: (longitude: number) => Math.floor(longitude / 30),
  getConstellationIndexFromConstellationName: (constellationName: string) => Object.values(constant.Constellation).indexOf(constellationName),
};
