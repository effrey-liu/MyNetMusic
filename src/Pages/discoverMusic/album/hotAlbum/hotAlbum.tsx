import './hotAlbum.css'
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import AlbumCover from '../../../../Components/albumCover/albumCover'
import { getHotAlbumsAction } from '../store/actionCreators';
export default function HotAlbum() {

    const { hotAlbums } = useSelector((state: any) => ({
        hotAlbums: state.getIn(["album", "hotAlbums"]),
    }), shallowEqual)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotAlbumsAction());
    }, [dispatch]);


    return <div className='hotAlbumBox'>
        <div className='hotAlbumTitle'>
            热门新碟
        </div>
        <div className='hotAlbumList'>
            {
                hotAlbums.slice(0, 10).map((item: any, index: any) => {
                    return <AlbumCover key={item.id} info={item} />
                })
            }
        </div>
    </div>;
}