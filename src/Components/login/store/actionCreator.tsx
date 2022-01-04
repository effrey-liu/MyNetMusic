import { gotoPhoneLogin } from '../../../Request/login'
import * as actionTypes from './actionTypes'
import loginInfo from '../../../Config/token'
import { getLoginInfo , setLoginInfo} from '../../../Utils/secretKey'
import { message } from 'antd'
// 更改登录框显示
export const changeIsVisible = (visibleState: any) => ({
  type: actionTypes.CHANGE_IS_VISIBLE_STATE,
  isVisible: visibleState
})

// 更改登录用户信息
export const changeUserProfile = (profileInfo: any) => ({
  type: actionTypes.CHANGE_PROFILE_INFO,
  profile: profileInfo
})

// 更改登录状态
export const changeUserLoginState = (loginState: any) => ({
  type: actionTypes.CHANGE_USER_LOGIN_STATE,
  isLogin: loginState
})

// 更改登录状态(token)
export const changeUserLoginToken = (token: any) => ({
  type: actionTypes.CHANGE_PROFILE_TOKEN,
  token
})


// 更改登录状态(cookie)
export const changeUserLoginCookie = (cookie: any) => ({
  type: actionTypes.CHANGE_PROFILE_COOKIE,
  cookie
})



export const getLoginProfileInfo = (username: any, password: any, tip: any) => {
  return (dispatch: (arg0: { type: string; profile?: any; isLogin?: any; token?: any; cookie?: any; isVisible?: any }) => void) => {
    gotoPhoneLogin(username, password).then((res: any) => {
      if (res.code !== 200) {
        message.error('账号或密码错误')
      }else {
        tip && message.success('登录成功')
        // 登录成功
        document.cookie = res.cookie
        // 保存登录信息
        dispatch(changeUserProfile(res && res.profile))
        // 更改登录状态
        dispatch(changeUserLoginState(true))
        dispatch(changeUserLoginToken(res.token))
        dispatch(changeUserLoginCookie(res.cookie))
        
        
        // 关闭模态框
        dispatch(changeIsVisible(false))

        // 更改登录状态
        loginInfo.username = username
        loginInfo.password = password
        loginInfo.state = true
        let newLoginInfo = Object.assign(getLoginInfo('loginInfo'), loginInfo)
        
        setLoginInfo('loginInfo', newLoginInfo)
        
      }
    })
  }
}