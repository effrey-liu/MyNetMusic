import './totalAlbum.css'
import KKPagination from '../../../../Components/pagination/pagination'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopAlbumsAction } from '../store/actionCreators';

import AlbumCover from '../../../../Components/albumCover/albumCover'

export default function TotalAlbum() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentKind, setCurrentKind] = useState(1);
    
    const { topAlbums, total } = useSelector((state: any) => ({
        topAlbums: state.getIn(["album", "topAlbums"]),
        total: state.getIn(["album", "topTotal"]),
    }), shallowEqual);

    const area = ['ALL','ZH','EA','KR','JP'] 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopAlbumsAction(1, area[currentKind]));
    }, [dispatch, currentKind]);

    const onPageChange = (page: any) => {
        setCurrentPage(page);
        dispatch(getTopAlbumsAction(page, area[currentKind]))
    }

    return <div className='totalAlbumBox'>
        <div className='totalAlbumTitleBox'>
            <span className="totalAlbumTitle">全部新碟</span>
            <span className="totalAlbumKind" onClick={() => setCurrentKind(0)}>全部</span>
            <span className='fenge'>|</span>
            <span className="totalAlbumKind" onClick={() => setCurrentKind(1)}>华语</span>
            <span className='fenge'>|</span>
            <span className="totalAlbumKind" onClick={() => setCurrentKind(2)}>欧美</span>
            <span className='fenge'>|</span>
            <span className="totalAlbumKind" onClick={() => setCurrentKind(3)}>韩国</span>
            <span className='fenge'>|</span>
            <span className="totalAlbumKind" onClick={() => setCurrentKind(4)}>日本</span>
        </div>
        <div className='totalAlbumList'>
            {
                topAlbums.map((item: any) => {
                    return <AlbumCover
                        key={item.id}
                        info={item} />
                })
            }
        </div>
        <KKPagination currentPage={currentPage}
            total={total}
            onPageChange={onPageChange} />
    </div>

}