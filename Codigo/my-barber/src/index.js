import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
