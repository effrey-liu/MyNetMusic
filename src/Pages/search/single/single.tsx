import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSearchSongListAction } from '../store/actionCreator'
import { Input } from 'antd'
import SingleSongItem from './singleSongItem/singleSongItem'
import { Navigate, useSearchParams } from 'react-router-dom'
import './single.css'
import AppFooter from '../../../Components/appFooter/appFooter'
import KKPagination from '../../../Components/pagination/pagination'
import { getSongDetailAction } from '../../player/store'
import { SearchOutlined } from '@ant-design/icons';

export default memo(function Single() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const song: any = searchParams.get('song');


  const [isRedirect, setIsRedirect] = useState(false);
  const [value, setValue] = useState('');
  const [recordActive, setRecordActive] = useState(-1);

  const changeInput = (target: any) => {
    let value = target.value.trim();
    if (value.length < 1) return;
    // dispatch(getSearchSongListAction(value, 1, 30));
  };


  const dispatch = useDispatch();

  useEffect(() => {
    if (song) dispatch(getSearchSongListAction(song, 1))
  }, [dispatch, song])


  const { searchSongList } = useSelector(
    (state: any) => ({
      searchSongList: state.getIn(['themeHeader', 'searchSongList']),
    }),
    shallowEqual
  );

  const inputRef: any = useRef();

  // 表单回车:跳转到搜索详情
  const handleEnter = useCallback(
    (e) => {
      if (recordActive >= 0) {
        setValue(searchSongList[recordActive].name + '-' + searchSongList[recordActive].artists[0].name);
      }
      setIsRedirect(true);
      setTimeout(() => { setIsRedirect(false) }, 300)
    },
    [dispatch, recordActive, searchSongList]
  );


  // 获取焦点
  const handleFocus = useCallback(() => {
    inputRef.current.select();
    setIsRedirect(false);
  }, [dispatch]);


  const { singleSongList } = useSelector(
    (state: any) => ({
      singleSongList: state.getIn(['search', 'singleSongList']),
    }),
    shallowEqual)


  const onPageChange = (page: any) => {
    setCurrentPage(page);
    dispatch(getSearchSongListAction(song, page))
  }

  return (<div>
    <div className='searchBox'>
      <div className="searchBoxContent">
        <div className="searchWrapper">
          <Input
            ref={inputRef}
            className="appHeaderSearch"
            placeholder="音乐/歌手"
            style={{ width: 490 }}
            size="large"
            prefix={<SearchOutlined />}
            onChange={(e) => { setIsRedirect(false); setValue(e.target.value) }}
            onInput={({ target }) => changeInput(target)}
            onFocus={handleFocus}
            onPressEnter={(e) => handleEnter(e)}
            value={value}
            allowClear={true} />
          {isRedirect && (
            <Navigate
              to={{
                pathname: '/search/single',
                search: `?song=${value}&type=1`,
              }} />
          )}
        </div>
      </div>
    </div>
    <div className='singleBox'>

      <div className="searchContent">
        <div className="searchInfo">
          搜索 "{song}", 找到
          <span className="music-amount"> 500 </span>单曲
        </div>
      </div>
      <div className='singleSongBox'>
        {singleSongList && singleSongList.map((item: any) => {
          return (
            <SingleSongItem
              key={item.id}
              songId={item.id}
              songName={item.name}
              singer={item.artists[0].name}
              album={item.album.name}
            />
          )
        })}
      </div>
      <KKPagination currentPage={currentPage}
        total={500}
        onPageChange={onPageChange} />

    </div>

    <AppFooter />
  </div>
  )
})
// import React, { memo, useEffect, useState } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { getSearchSongListAction } from '../store/actionCreator'
// import { Input } from 'antd'
// import SingleSongItem from './singleSongItem/singleSongItem'
// import { useSearchParams } from 'react-router-dom'
// import './single.css'
// import AppFooter from '../../../Components/appFooter/appFooter'

// export default memo(function Single() {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const song: any = searchParams.get('song');
//   const type: any = searchParams.get('type');
//   // redux hook
//   const dispatch = useDispatch()
//   const { singleSongList } = useSelector(
//     (state: any) => ({
//       singleSongList: state.getIn(['search', 'singleSongList']),
//     }),
//     shallowEqual
//   )
//   const { Search } = Input
//   const [searchSongName, setSearchSongName] = useState('')// 搜索歌曲名字
//   const [activeIndex, setActiveIndex] = useState('')// 控制导航item的active

//   useEffect(() => {
//     setSearchSongName(song)
//   }, [])


//   useEffect(() => {
//     !localStorage.hasOwnProperty('activeIndex') && localStorage.setItem('activeIndex', '0')
//     const strorageSelectedFilter = localStorage.getItem('activeIndex')
//     let activeIndex = '';
//     if (strorageSelectedFilter)
//       activeIndex = JSON.parse(strorageSelectedFilter)
//     setActiveIndex(activeIndex)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('activeIndex', JSON.stringify(activeIndex))
//   }, [activeIndex])


//   useEffect(() => {
//     if (song) dispatch(getSearchSongListAction(song, 20))
//   }, [dispatch, song, type, searchParams])

//   return (<div>
//     <div className='searchBox' >
//       <div className="searchBoxContent">
//         <div className="searchWrapper">
//           <Search
//             value={searchSongName}
//             style={{ width: 490 }}
//             onChange={(e: any) => setSearchSongName(e.target.value)}
//           />
//         </div>
//       </div>
//     </div>
//     <div className='singleBox'>

//       <div className="searchContent">
//         <div className="searchInfo">
//           搜索 "{song}", 找到
//           <span className="music-amount"> 20 </span>单曲
//         </div>
//       </div>

//       <div className='singleSongBox'>

//         {singleSongList && singleSongList.map((item: any) => {
//           return (
//             <SingleSongItem
//               key={item.id}
//               songId={item.id}
//               songName={item.name}
//               singer={item.artists[0].name}
//               album={item.album.name}
//             />
//           )
//         })}
//       </div>
//     </div>
//     <AppFooter />
//   </div>
//   )
// })
