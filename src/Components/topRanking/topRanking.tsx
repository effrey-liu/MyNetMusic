import { memo } from 'react'
import { useDispatch } from 'react-redux';

import { getSizeImage } from '../../Utils/formatUtils'
import { getSongDetailAction } from '../../Pages/player/store'

import './topRanking.css';

export default memo(function TopRanking(props:any) {
    // props and state
    const { info } = props
    const { tracks = [] } = info

    // redux hooks
    const dispatch = useDispatch()

    // other handle
    const playMusic = (item: any) => {
        dispatch(getSongDetailAction(item.id))
    }

    return (
        <div className='TopRankingWrapper'>
            <div className="top-ranking-header">
                <div className="top-ranking-image">
                    <img src={getSizeImage(info.coverImgUrl,80)} alt="" />
                    <a href="/todo" className="image_cover">""</a>
                </div>
                <div className="top-ranking-info">
                    <a href="/todo">{info.name}</a>
                    <div>
                        <button className="btn top-ranking-play sprite_02"></button>
                        <button className="btn top-ranking-favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="top-ranking-list">
                {
                    tracks.slice(0, 10).map((item:any, index:number) => {
                        return (
                            <div key={item.id} className="top-ranking-list-item">
                                <div className="top-ranking-rank">{index +1}</div>
                                <div className="top-ranking-info">
                                    <a className="top-ranking-name text-nowrap" href="/todo">{item.name}</a>
                                    <div className="top-ranking-operate">
                                        <button className="btn sprite_02 top-ranking-play" onClick={e => playMusic(item)}></button>
                                        <button className="btn sprite_icon2 top-ranking-addto"></button>
                                        <button className="btn sprite_02 top-ranking-favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="top-ranking-footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </div>
    )
})
