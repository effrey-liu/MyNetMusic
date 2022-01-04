import React, { useState, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import PlaylistCategory from '../playlistCategory/playlistCategory';
import './playlistHeader.css'

export default memo(function PlaylistHeader() {
    // hooks
    const [showCategory, setShowCategory] = useState(false);

    // redux
    const { currentCategory } = useSelector((state:any) => ({
        currentCategory: state.getIn(["playlist", "currentCategory"])
    }), shallowEqual);

    return (
        <div className='HeaderWrapper'>
            <div className='HeaderLeft'>
                <span className="title">{currentCategory}</span>
                <button className="select" onClick={e => setShowCategory(!showCategory)}>
                    <span>选择分类</span>
                    <i className="sprite_icon2"></i>
                </button>
                {showCategory ?  <PlaylistCategory/> : null}
            </div>
            <div className='HeaderRight'>
                <button className="hot">热门</button>
            </div>
        </div>
    )
})
