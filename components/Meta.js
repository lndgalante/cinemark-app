import Head from 'next/head'

const Meta = () => (
  <Head>
    <title>Cinemark Estrenos</title>

    <link rel="manifest" href="./static/manifest.json" />

    <link rel="apple-touch-icon" sizes="180x180" href="./static/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./static/favicons/favicon-16x16.png" />
    <link rel="mask-icon" href="./static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="./static/favicons/favicon.ico" />

    <meta name="msapplication-TileColor" content="#2d89ef" />
    <meta name="msapplication-config" content="./static/favicons/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />

    <meta name="title" content="Cinemark Estrenos" />
    <meta name="description" content="Obtené todos los estrenos de Cinemark Hoyts" />
    <meta
      name="keywords"
      content="cinemark,hoyts,cinemark hoyts,cinemark estrenos,cinemark hoyts estrenos,hoyts estrenos"
    />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Spanish" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="msapplication-starturl" content="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </Head>
)

export default Meta
