import React, { memo, useEffect } from 'react'

import ThemeHeaderRCM from '../../../../Components/themeHeaderRCM/themeHeaderRCM'
import SongsCover from '../../../../Components/songsCover/songsCover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHotRecommendAction } from '../store/actionCreators';
import "./hotRecommend.css"

export default memo(function HotRecommend() {
    // state

    // redux hooks
    const dispatch = useDispatch()
    const { hotRecommends } = useSelector((state: any) => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(8))
    }, [dispatch])

    // 其他业务逻辑

    return (
        <div className='HotRecommendWrapper'>
            <ThemeHeaderRCM title="热门推荐"  keywords={["华语","流行","民谣","摇滚","电子"]}></ThemeHeaderRCM>
            <div className="hot-recommend-list">
                {
                    hotRecommends.map((item: any, index: number) => {
                        return (
                            <SongsCover key={item.id} info={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
})
