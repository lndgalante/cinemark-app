import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { extractStyles } from 'evergreen-ui';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    const { css, hydrationScript } = extractStyles();

    return { ...page, css, hydrationScript, styleTags };
  }

  render() {
    const { css, hydrationScript } = this.props;

    return (
      <html lang='es'>
        <Head>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          {hydrationScript}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
