import { Map } from 'immutable'

import * as actionTypes from './constants'

/**
 * 使用ImmutableJS对数据进行包裹：
 * 每次修改会返回一个新的对象，并且尽可能引用旧的对象的内存空间
 * */
const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],

    upRanking: {},
    newRanking: {},
    originRanking: {},

    settleSings: [],
})

function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // 用扩展运算符的方式进行修改值
            // return {...state, topBanners: action.topBanners}
            return state.set("topBanners", action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set("hotRecommends", action.hotRecommends)
        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set("newAlbums", action.newAlbums)
            
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", action.upRanking)
        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", action.newRanking)
        case actionTypes.CHANGE_ORIGIN_RANKING:
            return state.set("originRanking", action.originRanking)
        case actionTypes.CHANGE_SETTLE_SONGER:
            return state.set("settleSings", action.settleSings)
        default:
            return state
    }
}

export default reducer