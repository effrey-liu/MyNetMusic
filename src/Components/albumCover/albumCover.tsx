import './albumCover.css'

import { getSizeImage } from '../../Utils/formatUtils'


export default function AlbumCover(props: any) {
    const { info, size = 130 } = props
    return (
        <div className='AlbumItem'>
            <div className="AlbumIcon">
                <img src={getSizeImage(info.picUrl, size)} alt="" />
                <a href="#/discoverMusic/album/todo" className='cover'></a>
            </div>
            <div className="AlbumInfo">
                <p className="AlbumName">{info.name}</p>
                <div className="AlbumNickNameBox">
                    {
                        info.artists.map((item: any, index: any) => {
                            return <span key={item.id} className="AlbumNickName">{item.name} </span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}