import styled from 'styled-components';

import img from '../../../../Static/image/download.png'
import btn from "../../../../Static/image/banner_sprite.png"

export const BannerWrapper: any = styled.div`
    background: url(${(props: any) => props.bgImage}) center center/6000px;
    
    .banner {
        height: 270px;
        background-color: red;

        display: flex;
        position: relative;
        width: 980px;
        margin: 0 auto;
    }

`

export const BannerLeft = styled.div`
    width: 730px;

    .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
            width: 100%;
        }
    }
`

export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    width: 254px;
    height: 270px;
    background: url(${img});
`

export const BannerControl = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${btn});
        background-color: transparent;
        cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, .1);
    }
}

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`
