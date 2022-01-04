import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../store/constants';
import { getSongList } from "../store/actionCreators";

import ThemeCover from '../../../../Components/themeCover/themeCover';
import Pagination from '../../../../Components/pagination/pagination';
import "./songList.css";

export default memo(function SongsList() {
    // hooks
    const [currentPage, setCurrentPage] = useState(1);

    // redux
    const { categorySongs } = useSelector((state:any) => ({
        categorySongs: state.getIn(["playlist", "categorySongs"])
    }), shallowEqual);
   
    const songList = categorySongs.playlists || [];
    const total = categorySongs.total || 0;
    const dispatch = useDispatch();
    function onPageChange(page:any, pageSize:any) {
        setCurrentPage(page);
        dispatch(getSongList(page));
    }

    return (
        <div className='SongListWrapper'>
            <div className="songs-list">
                {
                    songList.map((item:any, index:number) => {
                        return (
                            <ThemeCover info={item} key={item.id} right="30px" />
                        )
                    })
                }
            </div>
            <Pagination currentPage={currentPage}
                total={total}
                pageSize={PER_PAGE_NUMBER}
                onPageChange={onPageChange} />
        </div>
    )
})