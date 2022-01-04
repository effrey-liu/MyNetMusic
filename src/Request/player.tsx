import request from './request';

export function getSongDetail(ids:any) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function getLyric(id:any) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}

export function getSimiPlaylist(id:any) {
    return request({
        url: "/simi/playlist",
        params: {
            id
        }
    })
}

export function getSimiSong(id:any) {
    return request({
        url: "/simi/song",
        params: {
            id
        }
    })
}
