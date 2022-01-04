import Recommend from "../Pages/discoverMusic/recommend/recommend";
import Playlist from '../Pages/discoverMusic/playlist/playlist';
import Album from "../Pages/discoverMusic/album/album";
import DjRadio from "../Pages/discoverMusic/djradio/djradio";
import Artist from "../Pages/discoverMusic/artist/artist";
import Single from "../Pages/search/single/single";
import MyMusic from "../Pages/myMusic/myMusic";
import Focus from "../Pages/focus/focus";
import NotFound from "../Pages/404/404";
import { Navigate, Route, Routes } from 'react-router-dom'

export default function RouterConfig() {
  return <Routes>
    <Route path="/" element={<Navigate to="/discoverMusic" />} ></Route>
    <Route path="/discoverMusic" element={<Navigate to="/discoverMusic/recommend" />}></Route>
    <Route path="/discoverMusic/album" element={<Album />}></Route>
    <Route path="/discoverMusic/artist" element={<Artist />}></Route>
    <Route path="/discoverMusic/recommend" element={<Recommend />}></Route>
    <Route path="/discoverMusic/playlist" element={<Playlist />}></Route>
    <Route path="/discoverMusic/djRadio" element={<DjRadio />}></Route>
    <Route path="/discoverMusic/album/todo" element={<NotFound />}></Route>
    <Route path="/search" element={<Navigate to="/search/single?song=&type=1" />} ></Route>
    <Route path="/search/single" element={<Single />}></Route>
    <Route path="/myMusic" element={<MyMusic />}></Route>
    <Route path="/focus" element={<Focus />}></Route>
  </Routes>
}