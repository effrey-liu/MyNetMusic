import * as actionTypes from './constants';

import {
    getHotAlbums,
    getTopAlbums
} from '../../../../Request/album';

const changeHotAlbumsAction = (res: any) => ({
    type: actionTypes.CHANGE_HOT_ALBUMS,
    hotAlbums: res.albums
})

const changeTopAlbumAction = (res: any) => ({
    type: actionTypes.CHANGE_TOP_ALBUMS,
    topAlbums: res.albums
})


const changeTopTotalAction = (total: any) => ({
    type: actionTypes.CHANGE_TOP_TOTAL,
    total: total
})

export const getHotAlbumsAction = () => {
    return (dispatch: (arg0: { type: string; hotAlbums: any; }) => void) => {
        getHotAlbums().then(res => {
            dispatch(changeHotAlbumsAction(res));
        })
    }
}

export const getTopAlbumsAction = (page: any, area: any) => {
    return (dispatch: (arg0: { type: string; topAlbums?: any; total?: any; }) => void) => {
        getTopAlbums(30, (page - 1) * 30, area).then((res: any) => {  
            console.log(res);
            dispatch(changeTopAlbumAction(res));
            dispatch(changeTopTotalAction(res.total));
        })
    }
}

