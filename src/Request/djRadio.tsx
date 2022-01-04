import request from './request';

export function getDjRadioCatelist() {
    return request({
        url: "/dj/catelist"
    })
}

export function getDjRadioRecommend(type: any) {
    return request({
        url: "/dj/recommend/type",
        params: {
            type
        }
    })
}

export function getDjRadios(cateId: any, limit: any, offset: any) {
    return request({
        url: "/dj/radio/hot",
        params: {
            cateId,
            limit,
            offset
        }
    })
}