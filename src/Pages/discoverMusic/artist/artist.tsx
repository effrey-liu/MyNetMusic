import ArtistCategory from './artistCategory/artistCategory';
import ArtistList from './artistList/artistList';
import './artist.css'
import BackTop from '../../../Components/backTop/backTop';
import TopMenu from '../../../Components/topMenu/topMenu';
export default function Artist() {
    return (
        <div className='artistBox'>
            <TopMenu />
            <div className="artistBoxContent">
                <ArtistCategory />
                <ArtistList />
            </div>
            <BackTop />
        </div>
    )
}
