import { getSearchSongData } from '../../../Request/search';
import * as actionTypes from './actionType';

// 搜索歌曲Action
const changeSearchSongListAction = (songList: any) => ({
  type: actionTypes.CHANGE_SEARCH_SONG_LIST,
  songList,
});

// 改变焦点状态
export const changeFocusStateAction = (state: any) => ({
  type: actionTypes.CHANGE_FOCUS_STATE,
  state
})

// 搜索歌曲network
export const getSearchSongListAction = (searchStr: any, page: any, limit = 30 ) => {
  return (dispatch: (arg0: { type: string; songList: any; }) => void) => {
    getSearchSongData(searchStr, (page - 1) * 30, limit).then((res: any) => {
      const songList = res.result && res.result.songs
      dispatch(changeSearchSongListAction(songList));
    });
  };
};
