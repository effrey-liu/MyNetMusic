import { getSearchSongData } from '../../../Request/search'
import * as actionTypes from './actionType'

// 改变歌曲列表Action
const changeSongListAction = (songs: any) => ({
  type: actionTypes.CHANGE_SEARCH_SONG_LIST,
  songs
})

// 搜索歌曲列表network
export const getSearchSongListAction = (songName: any, page: any, limit = 30 ) => {
  return (dispatch: (arg0: { type: string; songs: any }) => void) => {
    getSearchSongData(songName, (page - 1) * 30, limit).then((res: any) => {
      const songs = res && res.result.songs
      dispatch(changeSongListAction(songs))
    })
  } 
}