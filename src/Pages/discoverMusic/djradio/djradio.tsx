import RadioCategory from './radioCategory/radioCategory';
import RadioRanking from './radioRanking/radioRanking';
import RadioNew from './radioNew/radioNew';
import AppFooter from '../../../Components/appFooter/appFooter';
import BackTop from '../../../Components/backTop/backTop';
import TopMenu from '../../../Components/topMenu/topMenu';
export default function RadioBox() {
    return <div>
        <TopMenu />
        <RadioCategory />
        <RadioNew />
        <RadioRanking />
        <AppFooter />
        <BackTop />
    </div>;
}