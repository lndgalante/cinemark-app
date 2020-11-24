import React, { Component } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import Reset from './shared/Reset';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 14px;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  display: none;
`;

class Layout extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-128371929-1');
    ReactGA.pageview(window.location.pathname);
    document.querySelector('.btn-select').removeAttribute('role');
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Main>
          <Title>Cinemark Estrenos</Title>
          {children}
        </Main>
        <Reset />
      </Wrapper>
    );
  }
}

export default Layout;
