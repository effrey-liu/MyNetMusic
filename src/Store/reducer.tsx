import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from "../Pages/discoverMusic/recommend/store";
import { reducer as albumReducer } from "../Pages/discoverMusic/album/store";
import { reducer as djRadioReducer } from "../Pages/discoverMusic/djradio/store";
import { reducer as playlistReducer} from "../Pages/discoverMusic/playlist/store";
import { reducer as loginReducer} from "../Components/login/store"
import { reducer as searchReducer } from '../Pages/search/store'
import { reducer as themeHeaderReducer } from '../Components/appHeader/store';
import { reducer as playerReducer } from '../Pages/player/store';
import { reducer as artistReducer } from "../Pages/discoverMusic/artist/store";

const KKReducer = combineReducers({
    album: albumReducer,
    djRadio: djRadioReducer,
    recommend: recommendReducer,
    playlist: playlistReducer,
    loginState: loginReducer,
    search: searchReducer,
    themeHeader: themeHeaderReducer,
    player: playerReducer,
    
    artist: artistReducer,
})

export default KKReducer;