import * as actionTypes from './constants';

import { getArtistList } from '../../../../Request/artist';

const changeArtistListAction = (artistList: any) => ({
    type: actionTypes.CHANGE_ARTIST_LIST,
    artistList
})

export const changeCurrentAreaAction = (area: any) => ({
    type: actionTypes.CHANGE_CURRENT_AREA,
    currentArea: area
});

export const changeCurrentTypeAction = (type: any) => ({
    type: actionTypes.CHANGE_CURRENT_TYPE,
    currentType: type
});

export const getArtistListAction = (area: any, type: any, alpha: any) => {
    return (dispatch: (arg0: { type: string; artistList: any; }) => void) => {
        getArtistList(area, type, alpha).then((res: any) => {
            console.log(res);
            dispatch(changeArtistListAction(res.artists))
        })
    }
}