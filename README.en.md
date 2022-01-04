# This project is Tencent Class Homework
* [Project Requirements](https://docs.qq.com/doc/p/426ac3761378142cddefaa7e707f580ead4779c8?groupUin=EpKaDT7UGTqbLo5fYlKYxQ%253D%253D&ADUIN=2318266514&ADSESSION=1637663925&ADjug=1637663925&ADJjuin=1637663&QQADP=CLIENT.015614565)

### Project Preview
* Preview address: [click]( https://effrey-liu.github.io/MyNetMusic/build/index.html)


## Project Technology Stack

### front end
* [React](https://reactjs.org/): `MVVM` framework for building user interfaces

* [React-Router](https://reacttraining.com/react-router/web/example/basic): the routing system provided for the project

* [Redux](https://redux.js.org/): React centralized state management

* [axios](https://axios-http.com/): Send network requests, request interception and response interception

* [Ant Design](https://ant.design/index-cn): Simplify the design of front-end components

* [Immutable](https://immutable-js.com/): Use `immutable` to manage the `state` saved in `reudx`

* [styled-components](https://styled-components.com/): Solve the problem that the writing style of component content will affect the global style and cause conflicts


### rear end

-`axios`: used to request back-end `API` music data
-[Netease Cloud API](https://github.com/Binaryify/NeteaseCloudMusicApi): Netease Cloud Music `NodeJS` version `API`, providing music data

### Other tools

-create-react-app: React scaffolding tool to quickly initialize project code
-Built-in eslint: code style checking tool to help us standardize code writing

### Project file structure
* src
  * Pages page
  * Router routing information configuration
  * Request back-end request function
  * Utils non-component functions and classes
  * Components page components and their style files
  * Resources required for the Static page
  * app.tsx root component
  * index.tsx entry file
* public static file resources
* package.json
* tsconfig.json

## Project instructions

-Clone the NetEase cloud api to the local, and start the service according to the website instructions
-Clone the code of this project to the local and run it in powershell:
```
    # Installation dependencies
    npm install
    # Start the project, run on localhost:3000
    npm run start
    # Project deployment
    npm run build
  
```