import * as actionTypes from './constants'

import { getSongDetail, getLyric, getSimiPlaylist, getSimiSong } from "../../../Request/player";
import { parseLyric } from '../../../Utils/lrcParse'


const changeCurrentSongAction = (song: any) => ({
    type: actionTypes.CHNAGE_CURRENT_SONG,
    song
})

const changePlayListAction = (playList: any) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index: any) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyricList: any) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const changeSequenceAction = (sequence:any) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentLyricIndexAction = (currentLyricIndex:any) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})

const changeSimiPlaylistAction = (res:any) => ({
    type: actionTypes.CHANGE_SIMI_PLAYLIST,
    simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res:any) => ({
    type: actionTypes.CHANGE_SIMI_SONGS,
    simiSongs: res.songs
})

export const changeCurrentIndexAndSongAction = (tag:any) => {
    return (dispatch:any, getState:any) => {
        const playList = getState().getIn(["player", "playList"])
        const sequence = getState().getIn(["player", "sequence"])
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"])

        switch (sequence) {
            case 1: // 随机播放
                let randomIndex = Math.floor(Math.random() * playList.length)
                while (randomIndex === currentSongIndex) {
                    randomIndex = Math.floor(Math.random() * playList.length)
                }
                currentSongIndex = randomIndex
                break;
            default: //循序播放
                currentSongIndex = currentSongIndex + tag
                if (currentSongIndex >= playList.length) {
                    currentSongIndex = 0
                }
                if (currentSongIndex < 0) {
                    currentSongIndex = playList.length - 1
                }
        }

        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))

        dispatch(getLyricAction(currentSong.id))
    }
}

export const getSongDetailAction = (ids:any) => {
    return (dispatch:any, getState:any) => {
        const playList = getState().getIn(["player", "playList"])
        const songIndex = playList.findIndex((song:any) => song.id === ids)

        let song = null
        if (songIndex !== -1) {  //在播放列表中找到歌曲
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))

            dispatch(getLyricAction(song.id))
        } else { 
            getSongDetail(ids).then((res:any) => {
                song = res.songs && res.songs[0]
                if (!song) return
                // 1.将请求的到的歌曲添加到播放列表中
                const newPlayList = [...playList]
                newPlayList.push(song)

                // 2.更新redux中的值
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))

                // 3.请求该歌曲歌词 
                dispatch(getLyricAction(song.id))
            })
        }
    }
}

export const getLyricAction = (id:any) => {
    return (dispatch:any) => {
        getLyric(id).then((res:any) => {
            const lyric = res.lrc.lyric
            const lyricList = parseLyric(lyric)
            dispatch(changeLyricListAction(lyricList))
        })
    }
}

export const getSimiPlaylistAction = () => {
    return (dispatch:any, getState:any) => {
        const id = getState().getIn(["player", "currentSong"]).id;
        if (!id) return;

        getSimiPlaylist(id).then((res:any) => {
            dispatch(changeSimiPlaylistAction(res));
        })
    }
}

export const getSimiSongAction = () => {
    return (dispatch:any, getState:any) => {
        const id = getState().getIn(["player", "currentSong"]).id;
        if (!id) return;

        getSimiSong(id).then((res:any) => {
            dispatch(changeSimiSongsAction(res));
        })
    }
}