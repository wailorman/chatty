import App from './containers/App'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
    <App store={store}/>,
    document.getElementById('app')
);