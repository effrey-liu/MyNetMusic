import { getSizeImage } from "../../Utils/formatUtils";
import './radioNewCover.css'

export default function LJRadioRecommendCover(props: any) {
    const { info } = props;

    return (
        <div className='radioNewItem'>
            <a href="/#">
                <img className='radioNewIcon' src={getSizeImage(info.picUrl, 150)} alt="" />
            </a>
            <h3 className='radioNewName'>
                <a href="#" >
                    {info.name}
                </a>
            </h3>
            <p className='radioNewDetails'>{info.desc}</p>
        </div>
    )
}
