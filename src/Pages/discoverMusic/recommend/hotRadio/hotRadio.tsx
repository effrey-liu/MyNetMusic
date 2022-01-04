import React, { memo } from 'react';

import { hotRadios } from "../../../../Common/localData";

import ThemeHeaderSmall from '../../../../Components/themeHeaderSmall/themeHeaderSmall';
// import "./hotRadio.css";
import { HotRadioWrapper } from './style';

export default memo(function HotRadio() {
    return (
        <HotRadioWrapper>
            <ThemeHeaderSmall title="热门主播" />
            <div className="radio-list">
                {
                    hotRadios.map((item:any, index:any) => {
                        return (
                            <div className="item" key={item.picUrl}>
                                <a href="/abc" className="image">
                                    <img src={item.picUrl} alt="" />
                                </a>
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="position text-nowrap">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})
