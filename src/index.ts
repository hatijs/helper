import { join } from "path";

import swisseph from "@hatijs/core";

import { constant, house, position, util } from "./hati";

class Hati {
  private static instance: Hati;
  private tjdUT: number;
	private geometry: {
		longitude: number,
		latitude: number,
	};

  public constant;
	public house;
  public position;
  public util;

  public swisseph;

  private constructor(date: Date, timeZone: number, longitude: number, latitude: number) {
    Hati.instance = this;

    // 기본 ephe 경로 설정
    swisseph.node_swe_set_ephe_path(join(__dirname, "..", "ephe"));

    // tjdUT 설정
    this.tjdUT = this.setUTCTimeZone(date, timeZone);

		// geometry 설정
		this.geometry = this.setGeometry(longitude, latitude);

    // c언어 라이브러리 제공 export
    this.swisseph = swisseph;

    // 가공된 라이브러리 제공 export
    this.constant = constant;
		this.house = house(this.tjdUT, this.geometry.longitude, this.geometry.latitude);
    this.position = position(this.tjdUT, this.geometry.longitude, this.geometry.latitude);
    this.util = util;
  }

  public static getInstance(date: Date, timeZone: number, longitude: number, latitude: number) {
    return Hati.instance || (Hati.instance = new Hati(date, timeZone, longitude, latitude));
  }

  public setUTCTimeZone(date: Date, timeZone: number) {
    const sweUTCTimeZone = swisseph.node_swe_utc_time_zone(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), timeZone);
    const sweJD = swisseph.node_swe_utc_to_jd(sweUTCTimeZone.year, sweUTCTimeZone.month, sweUTCTimeZone.day, sweUTCTimeZone.hour, sweUTCTimeZone.minute, sweUTCTimeZone.second, swisseph.SE_GREG_CAL);
    
    if ('error' in sweJD) {
      throw new Error(sweJD.error);
    }

    this.tjdUT = sweJD.julianDayUT;
		return this.tjdUT;
  }

	public setGeometry(longitude: number, latitude: number) {
    this.geometry = {
			longitude,
			latitude
		};

		return this.geometry;
  }
}

export default Hati;
