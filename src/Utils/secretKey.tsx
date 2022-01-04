
import { message } from 'antd';


export async function setLoginInfo(key: any, info: any) {
  if (key.length && JSON.stringify(info) !== '{}') {
    localStorage.setItem(key, info); 
    return true;
  } else {
    message.error('网络异常, 请稍后重试');
    return false;
  }
}

export function getLoginInfo(key: any) {
  if (key.length) {
    let tk: any = localStorage.getItem(key); 
    return JSON.parse(tk);
  }
}


export function clearLoginState() {
  localStorage.clear()
  window.location.reload()
}
