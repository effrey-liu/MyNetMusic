import { useSelector, shallowEqual } from 'react-redux';
import ThemeHeaderNormal from '../../../../Components/themeHeaderNormal/themeHeaderNormal';
import AlphaList from './alphaList/alphaList';
import ArtistItem from './artistItem/artistItem';
import './artistList.css'

export default function ArtistList() {
    // redux hooks
    const { currentType, artistList } = useSelector((state: any) => ({
        currentType: state.getIn(["artist", "currentType"]),
        artistList: state.getIn(["artist", "artistList"])
    }), shallowEqual);

    return (
        <div className='artistListBox'>
            <ThemeHeaderNormal title={currentType.name} />
            <AlphaList />
            <div className="artistList">
                {
                    artistList.map((item: any, index: any) => {
                        return <ArtistItem key={item.id} index={index} info={item} />
                    })
                }
            </div>
        </div>
    )
}
