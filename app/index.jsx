import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

const render = (component) => {
  ReactDOM.render(
    <AppContainer>
      {component}
    </AppContainer>,
    document.getElementById('root')
  );
}

render(<Root store={store} history={history} />)


if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(<NextRoot store={store} history={history} />)
  });
}
