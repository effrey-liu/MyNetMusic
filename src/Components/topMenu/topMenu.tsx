import './topMenu.css'
import { NavLink } from 'react-router-dom';



export default function TopMenu() {
  return (
    <div className="topMenu">
      <div className="topMenuBox">
          <div className="topMenuList">
              <div className="topMenuItem">
                <NavLink to='/discoverMusic/recommend'>推荐</NavLink>
              </div>
              <div className="topMenuItem">
                <NavLink to='/discoverMusic/2'>排行榜</NavLink>
              </div>
              <div className="topMenuItem">
                <NavLink to='/discoverMusic/playlist'>歌单</NavLink>
              </div>
              <div className="topMenuItem">
                <NavLink to="/discoverMusic/djRadio">主播电台</NavLink>
              </div>
              <div className="topMenuItem">
                <NavLink to='/discoverMusic/artist'>歌手</NavLink>
              </div>
              <div className="topMenuItem">
                <NavLink to="/discoverMusic/album">新碟上架</NavLink>
              </div>
          </div>
      </div>
    </div>
  )
}