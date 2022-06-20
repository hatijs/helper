import { join } from 'path';

import swisseph from '@hatijs/core';

import { constant, dignity, house, position, util } from './hati';

class Hati {
    private tjdUT: number;
    private geometry: {
        longitude: number;
        latitude: number;
    };

    public static constant = constant;
    public static util = util;

    public dignity;
    public house;
    public position;

    public swisseph;

    public constructor(
        date: Date,
        timeZone: number,
        longitude: number,
        latitude: number
    ) {
        // 기본 ephe 경로 설정
        swisseph.node_swe_set_ephe_path(join(__dirname, '..', 'ephe'));

        // tjdUT 설정
        const sweUTCTimeZone = swisseph.node_swe_utc_time_zone(
            date.getUTCFullYear(),
            date.getUTCMonth() + 1,
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            timeZone
        );
        const sweJD = swisseph.node_swe_utc_to_jd(
            sweUTCTimeZone.year,
            sweUTCTimeZone.month,
            sweUTCTimeZone.day,
            sweUTCTimeZone.hour,
            sweUTCTimeZone.minute,
            sweUTCTimeZone.second,
            swisseph.SE_GREG_CAL
        );

        if ('error' in sweJD) {
            throw new Error(sweJD.error);
        }

        this.tjdUT = sweJD.julianDayUT;

        // geometry 설정
        this.geometry = {
            longitude,
            latitude,
        };

        // c언어 라이브러리 제공 export
        this.swisseph = swisseph;

        // 가공된 라이브러리 제공 export
        this.dignity = dignity(
            this.tjdUT,
            this.geometry.longitude,
            this.geometry.latitude
        );
        this.house = house(
            this.tjdUT,
            this.geometry.longitude,
            this.geometry.latitude
        );
        this.position = position(
            this.tjdUT,
            this.geometry.longitude,
            this.geometry.latitude
        );
    }
}

export default Hati;
