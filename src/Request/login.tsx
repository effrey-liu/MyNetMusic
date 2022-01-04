import request from './request'
/* 手机号登录 */
export function gotoPhoneLogin(phone: any, password: any) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params: {
      phone,
      password,
    },
  })
}

/* 邮箱登录 */
export function gotoEmailLogin(email: any, password: any) {
  return request({
    url: '/login',
    method: 'get',
    params: {
      email,
      password,
    },
  })
}
