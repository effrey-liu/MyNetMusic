import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import {
    getCategory,
    getSongList,
    changeCurrentCategoryAction
} from "./store/actionCreators";

import AppFooter from '../../../Components/appFooter/appFooter';
import BackTop from '../../../Components/backTop/backTop';
import TopMenu from '../../../Components/topMenu/topMenu';
import PlaylistHeader from './playlistHeader/playlistHeader';
import SongList from './songList/songList';
import './playlist.css';

export default function Playlist() {

    // redux
    const dispatch = useDispatch();
    const location:any = useLocation();
    const cat = location.cat;

    useEffect(() => {
        dispatch(changeCurrentCategoryAction(cat));
    }, [dispatch, cat]);

    // hooks
    useEffect(() => {
        dispatch(getCategory());
        dispatch(getSongList(0));
    }, [dispatch])

    // let wrapperStyle = {
    //     padding: "40px !important",
    //     border: "1px solid #d3d3d3 !important",
    //     borderWidth: "0 1px !important",
    //     backgroundColor:"#fff !important",
    //     width: "980px !important",
    //     margin: "0 auto !important",
    // }

    return <div style={{backgroundColor:'rgb(245,245,245)'}}>
        <TopMenu />
            <div className='playlistWrapper'>
                <PlaylistHeader/>
                <SongList/>
            </div>
        <AppFooter />
        <BackTop />
    </div>
}