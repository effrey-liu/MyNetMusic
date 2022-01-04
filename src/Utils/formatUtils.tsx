export function getCount(count: number) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}

export function getSizeImage(imgUrl: any, size: number) {
    return `${imgUrl}?param=${size}x${size}`;
}


 export function getParseLoginState(loginState: any) {
    let loginMode = ''
    switch (loginState) {
      case 'phone':
        loginMode = '手机号'
        break
      case 'email':
        loginMode = '邮箱'
        break
      default:
        loginMode = '手机号'
        break
    }
    return loginMode
  }
  
  /**
   * 根据不同登录方式,返回匹配对应的正则
   * @param {String} loginState 登录状态
   */
  export function getMatchReg(loginState: any) {
    switch (loginState) {
      case 'phone':
        return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
      case 'email':
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      default:
        return ''
    }
  }
  
  export function formatMinuteSecond(time: any){
    let mm=time.getMinutes()
    let ss=time.getSeconds()
    let minuteStr=parseInt(mm).toString();
    let secondStr=parseInt(ss).toString();
    if(minuteStr.length<2){
        minuteStr='0'+minuteStr
    }
    if(secondStr.length<2){
        secondStr='0'+secondStr
    }
    return minuteStr+":"+secondStr;
}