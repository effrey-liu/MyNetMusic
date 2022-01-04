import request from './request';

export function getArtistList(area: any, type: any, initial: any) {
    let url = "/artist/list";
    let params: any = { limit: 100 }
    if (area === -1 && type === 1) {
        url = "/top/artists"
    } else {
        if (area === -1) {
            params = { limit: 100, cat: 5001 }
        } else {
            params = {
                type,
                area,
                initial,
                limit: 100
            }
        }
    }

    console.log("url:", url, "params:", params);

    return request({
        url,
        params
    })
}

