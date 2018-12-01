import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<h1>Hello from ES6!</h1>, document.getElementById('root'));


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
     <App/>,
     document.getElementById('root')
    );
  });
}
