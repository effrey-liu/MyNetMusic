import * as actionTypes from './constants';
import { PER_PAGE_NUMBER } from './constants';

import { handleSongsCategory } from "../../../../Utils/dataHandler";
import {
    getSongCategory,
    getSongCategoryList
} from "../../../../Request/playlist";


const changeCategoryAction = (res: any) => ({
    type: actionTypes.CHANGE_CATEGORY,
    category: res
})

const changeSongListAction = (res: any) => ({
    type: actionTypes.CHANGE_CATEGORY_SONGS,
    categorySongs: res
})

export const changeCurrentCategoryAction = (name: any) => ({
    type: actionTypes.CHANGE_CURRENT_CATEGORY,
    currentCategory: name
})

export const getCategory = () => {
    return (dispatch: any) => {
        getSongCategory().then((res: any) => {
            const categoryData = handleSongsCategory(res);
            dispatch(changeCategoryAction(categoryData))
        })
    }
}

export const getSongList = (page: any) => {
    return (dispatch: any, getState: any) => {
        // 1.获取currentCategory
        const name = getState().getIn(["songs", "currentCategory"]);
        
        // 2.获取数据
        getSongCategoryList(name, page * PER_PAGE_NUMBER).then((res: any) => {
            dispatch(changeSongListAction(res));
        })
    }
}
