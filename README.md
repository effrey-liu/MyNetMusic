
# 本项目为腾讯课堂大作业
* [项目要求](https://docs.qq.com/doc/p/426ac3761378142cddefaa7e707f580ead4779c8?groupUin=EpKaDT7UGTqbLo5fYlKYxQ%253D%253D&ADUIN=2318266514&ADSESSION=1637663925&ADTAG=CLIENT.QQ.5651_.0&ADPUBNO=27156&jumpuin=2318266514)

### 项目预览
* 预览地址：[点我]( https://effrey-liu.github.io/MyNetMusic/build/index.html )


## 项目技术栈

### 前端
* [React](https://reactjs.org/)：用于构建用户界面的 `MVVM` 框架

* [React-Router](https://reacttraining.com/react-router/web/example/basic)：为项目提供的路由系统

* [Redux](https://redux.js.org/)：React 集中状态管理

* [axios](https://axios-http.com/): 发送网络请求，请求拦截和响应拦截

* [Ant Design](https://ant.design/index-cn)：简化前端组件设计

* [Immutable](https://immutable-js.com/)：对`reudx`中保存的`state`使用`immutable`进行管理

* [styled-components](https://styled-components.com/)：解决组件内容编写样式会影响全局样式导致冲突


### 后端

- `axios`：用来请求后端 `API` 音乐数据
- [网易云 API](https://github.com/Binaryify/NeteaseCloudMusicApi)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据

### 其他工具

- create-react-app：React 脚手架工具，快速初始化项目代码
- 内置eslint：代码风格检查工具，帮助我们规范代码书写

### 项目文件结构
* src
  * Pages 页面
  * Router 路由信息配置
  * Request 后端请求功能
  * Utils 非组件的函数与类
  * Components 页面组件及其样式文件
  * Static 页面所需资源
  * app.tsx 根组件
  * index.tsx 入口文件
* public 静态文件资源
* package.json
* tsconfig.json

## 项目使用说明

- clone网易云api到本地，并按照网站指示开启服务
- 克隆本项目代码到本地，在powershell中运行：
```
	# 安装依赖
	npm install
	# 启动项目，运行在localhost:3000
	npm run start
  # 项目部署
  npm run build
```