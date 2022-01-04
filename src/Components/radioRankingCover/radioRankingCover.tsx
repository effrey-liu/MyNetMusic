import { getSizeImage } from '../../Utils/formatUtils';
import './radioRankingCover.css'


export default function LJRadioRankingCover(props: any) {
    const { radio } = props;

    return (
        <div className='radioRankingItem'>
            <a href="/#">
                <img className="radioRankingImg" src={getSizeImage(radio.picUrl, 120)} alt="" />
            </a>
            <div className="radioRankingInfo">
                <h3 className="radioRankingItemTitle">{radio.name}</h3>
                <div className="radioRankingItemNickName">
                    <i className="radioRankingItemIcon"></i>
                    {radio.dj.nickname}
                </div>
                <div className="radioRankingCount">
                    <span className="radioRankingPhase">共{radio.programCount}期</span>
                    <span className="radioRankingSubscribe">订阅{radio.subCount}次</span>
                </div>
            </div>
        </div>
    )
}
