import { Result, Button } from 'antd';
import {RollbackOutlined} from '@ant-design/icons'

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={<Button type="primary" icon={<RollbackOutlined />}>
          <a href="/#" style={{color:'white',textDecoration:'none'}}>返回首页</a>
        </Button>}
    />
  )
}
