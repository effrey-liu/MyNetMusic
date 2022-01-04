import * as actionTypes from './constants'
import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getArtistList,
} from '../../../../Request/recommend';

const changeTopBannerAction = (res: any) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = (res: any) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res: any) => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
})

const changeUpRankingAction = (res: any) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res.playlist
})

const changeNewRankingAction = (res: any) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res && res.playlist 
})

const changeOriginRankingAction = (res: any) => ({
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res.playlist
})

const changeSettleSingsAction = (res: any) => ({
    type: actionTypes.CHANGE_SETTLE_SONGER,
    settleSings: res.artists
})

export const getTopBannerAction = () => {
    return (dispatch: any) => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendAction = (limit: any) => {
    return (dispatch: any) => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export const getNewAblumAction = (limit: any, offset: any) => {
    return (dispatch: any) => {
        getNewAlbums(limit, offset).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

export const getTopListAction = (id: any) => {
    return (dispatch: any) => {
        getTopList(id).then(res => {
            switch (id) {
                case 19723756:
                    dispatch(changeUpRankingAction(res))
                    break
                case 3779629:
                    dispatch(changeNewRankingAction(res))
                    break
                case 2884035:
                    dispatch(changeOriginRankingAction(res))
                    break
                default:
            }
        })
    }
}

export const getSettleSingers = () => {
    return (dispath: any) => {
        getArtistList(5, 5001).then(res => {
            dispath(changeSettleSingsAction(res))
        })
    }
}