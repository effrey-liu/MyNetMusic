import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../store/actionCreators'

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function TopBanner() {
    // state
    const [currentIndex, setCurrentIndex] = useState(0)

    // 组件和redux关联，获取数据和进行操作
    const dispatch = useDispatch()
    const { topBanners } = useSelector((state: any) => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)

    // 其他hooks
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const bannerRef: any = useRef()

    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])

    // 其他业务逻辑
    const bgImage: any = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item: any,index: number) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )

})
