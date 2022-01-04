import './appHeader.css'
import { Dropdown, Input, Menu } from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import Login from '../login/login';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearLoginState } from '../../Utils/secretKey';
import { changeIsVisible } from '../login/store';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import {
    getSearchSongListAction,
    changeFocusStateAction,
} from './store/actionCreator';
import { getSongDetailAction } from '../../Pages/player/store';


export default function AppHeader() {


    const [isRedirect, setIsRedirect] = useState(false);
    const [value, setValue] = useState('');
    const [recordActive, setRecordActive] = useState(-1);

    const changeInput = (target: any) => {
        let value = target.value.trim();
        if (value.length < 1) return;
        dispatch(changeFocusStateAction(true));
        dispatch(getSearchSongListAction(value, 1, 6));
    };


    const dispatch = useDispatch();
    const { searchSongList, focusState, isLogin, profile } = useSelector(
        (state: any) => ({
            searchSongList: state.getIn(['themeHeader', 'searchSongList']),
            focusState: state.getIn(['themeHeader', 'focusState']),
            isLogin: state.getIn(['loginState', 'isLogin']),
            profile: state.getIn(['loginState', 'profile']),
        }),
        shallowEqual
    );


    const inputRef: any = useRef();
    useEffect(() => {
        if (focusState) inputRef.current.focus();
        else inputRef.current.blur();
    }, [focusState]);


    // 点击当前item歌曲项
    const changeCurrentSong = (id: any, item: any) => {
        // 放到搜索文本框
        setValue(item.name + '-' + item.artists[0].name);
        dispatch(changeFocusStateAction(false));
        //派发action
        dispatch(getSongDetailAction(id));
    };

    // 表单回车:跳转到搜索详情
    const handleEnter = useCallback(
        (e) => {
            if (recordActive >= 0) {
                setValue(searchSongList[recordActive].name + '-' + searchSongList[recordActive].artists[0].name);
            }
            dispatch(changeFocusStateAction(false));
            setIsRedirect(true);
            setTimeout(() => { setIsRedirect(false) }, 300)
        },
        [dispatch, recordActive, searchSongList]
    );

    // 获取焦点
    const handleFocus = useCallback(() => {
        inputRef.current.select();
        dispatch(changeFocusStateAction(true));
        setIsRedirect(false);
    }, [dispatch]);


    // 监控用户是否按: "上"或"下"键
    const watchKeyboard = useCallback(
        (even) => {
            let activeNumber = recordActive;
            if (even.keyCode === 38) {
                activeNumber--;
                activeNumber =
                    activeNumber < 0 ? searchSongList?.length - 1 : activeNumber;
                setRecordActive(activeNumber);
            } else if (even.keyCode === 40) {
                activeNumber++;
                activeNumber =
                    activeNumber >= searchSongList?.length ? 0 : activeNumber;
                setRecordActive(activeNumber);
            }
        },
        [recordActive, setRecordActive, searchSongList]
    );



    // 用户下拉
    const profileDwonMenu: any = () => {
        return (
            isLogin ? (
                <Menu>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="#/" onClick={(e) => e.preventDefault()}>
                            {profile.nickname}
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a rel="noopener noreferrer" href="#/user" >
                            我的主页
                        </a>
                    </Menu.Item>
                    <Menu.Item danger onClick={() => clearLoginState()}>
                        退出登录
                    </Menu.Item>
                </Menu>
            ) : ''
        );
    };

    const showProfileContent = () => {
        return <img src={profile.avatarUrl} alt="" className="profileImg" />
    }

    return <div className="appHeader">
        <div className="appHeaderBox">
            <div className="appHeaderLeftBox">
                <a href="#/discoverMusic" className="appHeaderLogo"></a>
                <div className="appHeaderSelectList">
                    <div className="appHeaderSelectItem">
                        <NavLink to="/discoverMusic">发现音乐
                            <i className="appHeaderSelectIcon"></i>
                        </NavLink>
                    </div>
                    <div className="appHeaderSelectItem">
                        <NavLink to="/myMusic" >我的音乐
                            <i className="appHeaderSelectIcon"></i>
                        </NavLink>
                    </div>
                    <div className="appHeaderSelectItem">
                        <NavLink to="/focus">关注
                            <i className="appHeaderSelectIcon"></i>
                        </NavLink>
                    </div>
                    <div className="appHeaderSelectItem">
                        <a href='https://music.163.com/store/product' rel="noopener noreferrer" target="_blank">商城</a>
                    </div>
                    <div className="appHeaderSelectItem">
                        <a href='https://music.163.com/st/musician' rel="noopener noreferrer" target="_blank">音乐人</a>
                    </div>
                    <div className="appHeaderSelectItem">
                        <a href='https://music.163.com/#/download' rel="noopener noreferrer" target="_blank">下载客户端</a>
                    </div>
                </div>
            </div>
            <div className="appHeaderRightBox">
                <div className="appHeaderSearchBox">
                    <Input
                        ref={inputRef}
                        className="appHeaderSearch"
                        placeholder="音乐/歌手"
                        size="large"
                        prefix={<SearchOutlined />}
                        onChange={(e) => { setIsRedirect(false); setValue(e.target.value) }}
                        onInput={({ target }) => changeInput(target)}
                        onFocus={handleFocus}
                        onPressEnter={(e) => handleEnter(e)}
                        value={value}
                        onKeyDown={watchKeyboard}
                        allowClear={true} />
                    {isRedirect && (
                        <Navigate
                            to={{
                                pathname: '/search/single',
                                search: `?song=${value}&type=1`,
                            }} />
                    )}
                    <div className="appHeaderDownSlider" style={{ display: focusState ? 'block' : 'none' }}>
                        <div className="searchHeader">
                            <span className="discover">搜"歌曲"相关用户&gt;</span>
                        </div>

                        <div className="searchBody">
                            <div className="kind">
                                <span className="name">单曲</span>
                            </div>

                            <span className="main">
                                {searchSongList &&
                                    searchSongList.map((item: any, index: any) => {
                                        return (
                                            <div
                                                className={'item ' + (recordActive === index ? 'active' : '')}
                                                key={item.id}
                                                onClick={() => changeCurrentSong(item.id, item)}>
                                                <span>{item.name}</span>-{item.artists[0].name}
                                            </div>
                                        );
                                    })}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="appHeaderCenter">
                    <a href=''>创作者中心</a>
                </div>
                <Dropdown overlay={profileDwonMenu}>
                    <div className="login" onClick={() => !isLogin && dispatch(changeIsVisible(true))}>
                        {isLogin ? showProfileContent() : '登录'} <DownOutlined />
                    </div>
                </Dropdown>
            </div>
        </div>
        <div className="appHeaderDivider"></div>
        <Login />
    </div>
}