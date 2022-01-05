import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
