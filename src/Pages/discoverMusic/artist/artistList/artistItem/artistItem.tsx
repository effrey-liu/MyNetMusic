import { getSizeImage } from '../../../../../Utils/formatUtils';
import './artistItem.css'

export default function ArtistItem(props: any) {
    const { info } = props;

    return (
        <div className='artistItemBox'>
            {
                <div className="image">
                    <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
                </div>
            }
            <div className="info">
                <span className="name">{info.name}</span>
                <i className="icon"></i>
            </div>
        </div>
    )
}
