import request from './request';

export function getHotAlbums() {
    return request({
        url: "/album/newest"
    })
}

export function getTopAlbums(limit: any, offset: any, area: any) {
    return request({
        url: "/album/new",
        params: {
            limit,
            offset,
            area,
        }
    })
}
