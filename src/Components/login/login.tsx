import './login.css'
import { useRef, useState } from 'react'
import { Button, message, Modal } from 'antd'
import Draggable from 'react-draggable'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsVisible } from './store'
import { PhoneOutlined } from '@ant-design/icons'
import LoginIcon from '../loginIcon/loginIcon'
import LoginForm from '../loginForm/loginForm'


export default function Login() {
    const [disabled, setDisabled] = useState(true)
    const [loginState, setLoginState] = useState('default') // 默认状态显示
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
    const draggleRef: any = useRef()

    const dispatch = useDispatch()
    const { isVisible } = useSelector(
        (state: any) => ({
            isVisible: state.getIn(['loginState', 'isVisible']),
        }),
        shallowEqual
    )

    const handleCancel = (e: any) => {
        dispatch(changeIsVisible(false))
        setTimeout(() => {
            setLoginState('default')
        }, 100)
    }
    // 拖拽
    const onStart = (event: any, uiData: any) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement
        const targetRect = draggleRef?.current?.getBoundingClientRect()
        setBounds({
            left: -targetRect?.left + uiData?.x,
            right: clientWidth - (targetRect?.right - uiData?.x),
            top: -targetRect?.top + uiData?.y,
            bottom: clientHeight - (targetRect?.bottom - uiData?.y),
        })
    }

    // other handle
    const handleLogin = (loginMode: any) => {
        switch (loginMode) {
            case 'phone':
                setLoginState('phone')
                break
            case 'email':
                setLoginState('email')
                break
            default:
        }
    }

    const defaultWrapperContent = (
        <div className='loginBox'>
            <div className='loginLeftBox'>
                <div className="loginLeftContent">
                    <div className="loginLeftBackground"></div>
                    <Button
                        type="ghost"
                        onClick={() => message.warn('暂不做')}
                        shape="round"
                        icon={<PhoneOutlined />}
                        className="gap">
                        注册
                    </Button>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<PhoneOutlined />}
                        onClick={() => handleLogin('phone')}>
                        手机号登录
                    </Button>
                </div>
            </div>
            <div className='loginRightBox'>
                <div className="loginRightIcons">
                    <LoginIcon
                        onClick={() => message.warn('暂不做')}
                        position="-150px -670px"
                        description="微信登录"
                    />
                    <LoginIcon
                        onClick={() => message.warn('暂不做')}
                        position="-190px -670px"
                        description="QQ登录"
                    />
                    <LoginIcon
                        onClick={() => message.warn('暂不做')}
                        position="-231px -670px"
                        description="微博登录"
                    />
                    <LoginIcon
                        onClick={() => handleLogin('email')}
                        position="-271px -670px"
                        description="网易邮箱登录"
                    />
                </div>
            </div>
        </div>

    )

    const phoneLogin = (loginState: any) => {
        return (
            <div className='phoneLoginBox'>
                <LoginForm loginState={loginState} />
            </div>
        )
    }

    return (
        <Draggable>
            <Modal
                centered
                footer={null}
                title={
                    <div
                        style={{ width: '100%', cursor: 'move', }}
                        onMouseOver={() => {
                            if (disabled) setDisabled(false)
                        }}
                        onMouseOut={() => {
                            setDisabled(true)
                        }}
                        onFocus={() => { }}
                        onBlur={() => { }}
                    >
                    </div>
                }
                visible={isVisible}
                onCancel={handleCancel}
                modalRender={(modal) => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                {loginState === 'default' ? defaultWrapperContent : null}
                {loginState === 'phone' ? phoneLogin('phone') : undefined}
                {loginState === 'email' ? phoneLogin('email') : undefined}
            </Modal>
        </Draggable>
    )
}
