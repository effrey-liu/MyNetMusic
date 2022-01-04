import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import RouterConfig from './Router/index'
import AppHeader from './Components/appHeader/appHeader'
import store from './Store/index'

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <RouterConfig />
      </HashRouter>
    </Provider>
  )
  
}


