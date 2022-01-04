import HotAlbum from './hotAlbum/hotAlbum';
import TotalAlbum from './totalAlbum/totalAlbum';
import AppFooter from '../../../Components/appFooter/appFooter';
import BackTop from '../../../Components/backTop/backTop';
import TopMenu from '../../../Components/topMenu/topMenu';

export default function NewAlbumBox() {
    return <div style={{backgroundColor:'rgb(245,245,245)'}}>
        <TopMenu />
        <HotAlbum />
        <TotalAlbum />
        <AppFooter />
        <BackTop />
    </div>
}