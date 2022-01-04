import request from './request'

export function getTopBanners() {
    return request({
        url: "/banner"
    })
}

export function getHotRecommends(limit: any) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getNewAlbums(limit: any, offset: any) {
    return request({
        url: "/album/new",
        params: {
            limit,
            offset
        }
    })
}

export function getTopList(id: any) {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}

export function getArtistList(limit: any, cat: any) {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit
        }
    })
}