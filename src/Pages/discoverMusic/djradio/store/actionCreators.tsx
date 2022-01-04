import * as actionTypes from './constants';
import {
    getDjRadioCatelist,
    getDjRadioRecommend,
    getDjRadios
} from "../../../../Request/djRadio";

const changeCategoryAction = (res: any) => ({
    type: actionTypes.CHANGE_RADIO_CATEGORY,
    categories: res.categories
})

const changeRecommendsAction = (res: any) => ({
    type: actionTypes.CHANGE_RECOMMENDS,
    recommends: res.djRadios
})

const changeRadiosAction = (res: any) => ({
    type: actionTypes.CHANGE_RADIOS,
    radios: res.djRadios
})

export const changeCurrentIdAction = (id: any) => ({
    type: actionTypes.CHANGE_CURRENT_ID,
    currentId: id
})

export const getRadioCategories = () => {
    return (dispatch: (arg0: { type: string; categories?: any; currentId?: any; }) => void) => {
        getDjRadioCatelist().then((res: any) => {
            dispatch(changeCategoryAction(res));
            const currentId = res.categories[0].id;
            dispatch(changeCurrentIdAction(currentId));
        })
    }
}

export const getRadioRecommend = (currentId: any) => {
    return (dispatch: (arg0: { type: string; recommends: any; }) => void) => {
        getDjRadioRecommend(currentId).then(res => {
            dispatch(changeRecommendsAction(res));
        })
    }
}

export const getRadios = (currentId: any, offset: any) => {
    return (dispatch: (arg0: { type: string; radios: any; }) => void) => {
        getDjRadios(currentId, 30, offset).then(res => {
            dispatch(changeRadiosAction(res));
        })
    }
}