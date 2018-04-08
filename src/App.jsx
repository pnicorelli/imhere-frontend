import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Layout/Main';
import { HashRouter } from 'react-router-dom'

const App = () => (
  <HashRouter>
    <Main />
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'))
