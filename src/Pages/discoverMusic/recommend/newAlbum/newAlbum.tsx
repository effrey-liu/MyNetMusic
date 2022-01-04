import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAblumAction } from '../store/actionCreators'

import { Carousel } from 'antd';
import ThemeHeaderRCM from '../../../../Components/themeHeaderRCM/themeHeaderRCM'
import AlbumCover from '../../../../Components/albumCover/albumCover'
import "./newAlbum.css";
// import { NewAlbumWrapper } from './style';

export default memo(function NewAblum() {
    // state

    // redux hooks
    const dispatch = useDispatch()
    const { newAlbums } = useSelector((state: any) => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual)

    // 其他hooks
    useEffect(() => {
        dispatch(getNewAblumAction(10,20))
    }, [dispatch])

    const pageRef: any = useRef()

    // 其他业务逻辑

    return (
        <div className='NewAlbumWrapper'>
            <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
            <div className="content">
                <button className="arrow arrow-left sprite_02"
                        onClick={e => pageRef.current.prev()}>  
                </button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbums.slice(item*5, (item+1)*5).map((iten:any) => {
                                                return <AlbumCover key={iten.id} 
                                                                    info={iten} 
                                                                    size={100}
                                                                    width={118}
                                                                    bgp="-570px"></AlbumCover>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                        onClick={e => pageRef.current.next()}>
                </button>
            </div>
        </div>
    )
})
