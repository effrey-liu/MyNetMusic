import { memo } from 'react';

import {
    getSizeImage,
    getCount
} from "../../Utils/formatUtils";
import './themeCover.css'

export default memo(function ThemeCover(props:any) {
    const { info, right } = props;

    let wrapperStyle = {
        width: "140px",
        margin: `20px ${ right? right:0} 20px 0`
    }

    return (
        <div className='ThemeCoverWrapper' style={wrapperStyle}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
        </div>
    )
})
