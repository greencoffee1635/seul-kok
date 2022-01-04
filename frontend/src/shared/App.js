import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from '../shared/GlobalStyle';
import theme from '../shared/theme';
import { ThemeProvider } from 'styled-components';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import QuestionPage from '../pages/QuestionPage';
import PickPosterPage from '../pages/PickPosterPage';
import ResultPage from '../pages/ResultPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/question" component={QuestionPage} />
          <Route exact path="/question2" component={PickPosterPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/mypage" component={MyPage} />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
