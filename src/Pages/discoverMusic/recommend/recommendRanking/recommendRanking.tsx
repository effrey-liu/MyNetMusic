import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../store/actionCreators'

import ThemeHeaderRCM from '../../../../Components/themeHeaderRCM/themeHeaderRCM'
import TopRanking from '../../../../Components/topRanking/topRanking'
// import "./recommendRanking.css"
import { RecommendRankingWrapper } from './style';

export default memo(function RecommendRanking() {
    // state

    // redux hooks
    const dispatch = useDispatch()
    const { upRanking, newRanking, originRanking } = useSelector((state: any) => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"])
    }), shallowEqual)

    // other hooks
    useEffect(() => {
        dispatch(getTopListAction(19723756))
        dispatch(getTopListAction(3779629))
        dispatch(getTopListAction(2884035))
    }, [dispatch])

    // 其他业务逻辑

    return (
        <RecommendRankingWrapper>
            <ThemeHeaderRCM title="榜单"></ThemeHeaderRCM>
            <div className="tops">
                <TopRanking info={upRanking}></TopRanking>
                <TopRanking info={newRanking}></TopRanking>
                <TopRanking info={originRanking}></TopRanking>
            </div>
        </RecommendRankingWrapper>
    )
})
