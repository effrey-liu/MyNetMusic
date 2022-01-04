import React, { memo } from 'react';
import { changeIsVisible } from '../../../../Components/login/store'
import { useDispatch, useSelector } from 'react-redux'
import "./userLogin.css"

export default memo(function LJUserLogin() {
    const dispatch = useDispatch()
    const { isLogin } = useSelector((state: any) => ({
        isLogin: state.getIn(['loginState', 'isLogin']),
    }))

    const handleLogin = () => {
        if (!isLogin) dispatch(changeIsVisible(true))
    }
    return (
        <div className='UserLoginWrapper sprite_02' style={{ display: isLogin ? 'none' : 'flex' }}>
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a className="sprite_02"  onClick={() => handleLogin()}>用户登录</a>
        </div>
    )
})

