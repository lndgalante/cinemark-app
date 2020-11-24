import React from 'react';
import { Provider } from 'react-redux';

import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

// components
import Layout from '../components/Layout';

// store
import makeStore from '../store';

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(NextApp);
