import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '../../store/reducers/index.reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Title from '../../components/Title';
import Logo from '../../components/Logo';
import SubTitle from '../../components/SubTitle';
import ParametersSelection from '../ParametersSelection/ParametersSelection';
import MyTimeline from '../Timeline/Timeline';
import { connexionError } from '../../store/reducers/utils.reducers';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

const GlobalStyle = createGlobalStyle`
  html, #root {
    height : 100%;
  }
  body {
    height: 100%;
    background-color: #F9F9F9;
  }
`;

const AppHeader = styled.div`
  width : 100%;
  height : 13%;
  border-bottom : 1px solid lightgray;
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding-left : 2%;
  padding-right : 2%;
`

const AppContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ErrorMessage = styled.h1`
  color : red;
`

interface AppProps {
  connexionError : boolean;
}

const  App : React.FC<AppProps> = (props : AppProps) => {
  let content : React.ReactNode;
  if (props.connexionError) {
    content = <ErrorMessage>Connexion Error</ErrorMessage>
  } else {
    content = (
      <>
        <ParametersSelection/>
        <MyTimeline/>
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      <AppHeader>
        <Logo src={LogoUrl} />
        <div>
          <Title>Birdie Test</Title>
          <SubTitle>By Aurélien Pasteau</SubTitle>
        </div>
      </AppHeader>
      <AppContainer>
        {content}
      </AppContainer>
    </>
  );
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  connexionError : state.connexionError
});

export default connect(mapStateToProps)(App);