import { useDispatch } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import { getSongDetailAction } from '../../../player/store'
import propTypes from 'prop-types'
import { PlayCircleOutlined } from '@ant-design/icons'
import './singleSongItem.css'

function SingleSongItem(props: any) {
  const { songId, songName, singer, album } = props


  const dispatch = useDispatch()

  const playMusic = () => {
    dispatch(getSongDetailAction(songId))
  }


  return (
    <div className='singleSongItemBox'>
      <div className="singleSongName">
        <PlayCircleOutlined  onClick={() => playMusic()}/>
        <em onClick={() => playMusic()  }>{songName}</em>
        <button className="btn addto"></button>
      </div>
      <NavLink to="/discover/song" className="singer" onClick={() => playMusic()}>
        {singer}
      </NavLink>
      <div className="text-nowrap album">《{album}》</div>
    </div>
  )
}

SingleSongItem.propTypes = {
  songId: propTypes.number.isRequired,
  songName: propTypes.string.isRequired,
  singer: propTypes.string.isRequired,
  album: propTypes.string.isRequired,
}

export default SingleSongItem
