import Head from 'next/head'

const Meta = () => (
  <Head>
    <title>Cinemark Estrenos</title>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./static/favicon-16x16.png"
    />
    <link rel="manifest" href="./static/site.webmanifest" />
    <link
      rel="mask-icon"
      href="./static/safari-pinned-tab.svg"
      color="#5bbad5"
    />

    <meta charSet="utf-8" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </Head>
)

export default Meta
