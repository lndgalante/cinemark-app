import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { extractStyles } from 'evergreen-ui'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const { css, hydrationScript } = extractStyles()

    return {
      ...page,
      css,
      hydrationScript,
    }
  }

  render() {
    const { css, hydrationScript } = this.props

    return (
      <html lang="es">
        <Head>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
