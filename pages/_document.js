import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="./static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
          <link rel="manifest" href="./static/site.webmanifest" />
          <link rel="mask-icon" href="./static/safari-pinned-tab.svg" color="#5bbad5" />

          <meta charset="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
