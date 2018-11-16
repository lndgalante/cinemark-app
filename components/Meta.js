import Head from 'next/head'

const Meta = () => (
  <Head>
    <title>Cinemark Estrenos</title>

    {/* PWA Manifest */}
    <link rel="manifest" href="./static/manifest.json" />

    {/* Favicons */}
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

    {/* iOS Splash Screens */}
    <link
      href="./static/splashscreens/iphone5_splash.png"
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/iphone6_splash.png"
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/iphoneplus_splash.png"
      media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/iphonex_splash.png"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/iphonexr_splash.png"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/iphonexsmax_splash.png"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/ipad_splash.png"
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/ipadpro1_splash.png"
      media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/ipadpro3_splash.png"
      media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="./static/splashscreens/ipadpro2_splash.png"
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
  </Head>
)

export default Meta
