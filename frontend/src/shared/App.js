import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from '../shared/GlobalStyle';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import QuestionPage from '../pages/QuestionPage';
import ResultPage from '../pages/ResultPage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/question" component={QuestionPage} />
        <Route exact path="/result" component={ResultPage} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
