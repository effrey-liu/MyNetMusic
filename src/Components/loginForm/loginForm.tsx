import propTypes from 'prop-types'
import { getParseLoginState, getMatchReg } from '../../Utils/formatUtils'
import { Form, Input, Button, Checkbox, message } from 'antd'
import './loginForm.css'
import { useDispatch } from 'react-redux'
import { getLoginProfileInfo } from '../login/store/actionCreator'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { span: 30 },
}

const LoginForm = (props: any) => {
  const { loginState } = props
  const parseLoginModeText: any = getParseLoginState(loginState)
  const mathchReg: any = getMatchReg(loginState)
  const pwdReg: any = /[0-9a-zA-Z._-]{6,20}/
  const dispatch = useDispatch()

  const onFinish = ({ username, password }: any) => {
    dispatch(getLoginProfileInfo(username, password, true))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (<>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={parseLoginModeText}
        name="username"
        rules={[
          {
            pattern: mathchReg,
            message: `请输入正确的${parseLoginModeText}`,
          },
          { required: true, message: '请输入你的账户' },
        ]}
      >
        <Input autoFocus />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          { pattern: pwdReg, message: '密码最短6位' },
          { required: true, message: '请输入你的密码!' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <div className="textAlignRight">
        <Checkbox className="mr80" defaultChecked={true}>
          自动登录
        </Checkbox>
        <span className="forgetPwd">忘记密码?</span>
      </div>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          size="middle"
          block
          shape="round"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  </>
  )
}

LoginForm.propTypes = {
  loginState: propTypes.string,
}

LoginForm.defaultProps = {
  loginState: 'phone',
}

export default LoginForm
