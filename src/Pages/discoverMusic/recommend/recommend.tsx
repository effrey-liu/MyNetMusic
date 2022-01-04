import AppFooter from '../../../Components/appFooter/appFooter';
import BackTop from '../../../Components/backTop/backTop';
import TopMenu from '../../../Components/topMenu/topMenu';
import HotRecommend from './hotRecommend/hotRecommend';
import TopBanner from './topBanner/topBanner';
import NewAlbum from './newAlbum/newAlbum';
import RecommendRanking from './recommendRanking/recommendRanking';
import UserLogin from './userLogin/userLogin';
import SettleSinger from "./settleSinger/settleSinger";
import HotRadio from './hotRadio/hotRadio';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from "./style"


export default function Recommend(){


    return (
        <div style={{backgroundColor:'rgb(245,245,245)'}}>
            <TopMenu />
            <RecommendWrapper>
                <TopBanner/>
                <Content>
                    <RecommendLeft>
                        <HotRecommend/>
                        <NewAlbum/>
                        <RecommendRanking/>
                    </RecommendLeft>
                    <RecommendRight>
                        <UserLogin/>
                        <SettleSinger/>
                        <HotRadio/>
                    </RecommendRight>
                </Content>
            </RecommendWrapper>
            <AppFooter />
            <BackTop />
        </div>
    );

}