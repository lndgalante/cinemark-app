import Head from 'next/head'

const Meta = () => (
  <Head>
    {/* General */}
    <title>Cinemark Estrenos</title>
    <meta charSet="UTF-8" />
    <meta name="title" content="Cinemark Estrenos" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="description" content="Obtené todos los estrenos de Cinemark Hoyts" />
    <meta
      name="keywords"
      content="estrenos,cinemark estrenos,cinemark,hoyts,cinemark hoyts,cinemark estrenos,cinemark hoyts estrenos,hoyts estrenos"
    />
    <meta name="language" content="Spanish" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Favicons */}
    <link rel="icon" type="image/png" sizes="32x32" href="./static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./static/favicons/favicon-16x16.png" />
    <link rel="mask-icon" href="./static/favicons/safari-pinned-tab.svg" color="#fff" />
    <link rel="shortcut icon" href="./static/favicons/favicon.ico" />

    {/* PWA Manifest */}
    <link rel="manifest" href="./static/manifest.json" />

    {/* IE */}
    <meta name="theme-color" content="#ffffff" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="msapplication-starturl" content="/" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="./static/icons/icon-144x144.png" />
    <meta name="msapplication-config" content="./static/favicons/browserconfig.xml" />

    {/* iOS Splash Screens */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="white" />
    <meta name="apple-mobile-web-app-title" content="Cinemark Estrenos" />
    <link rel="apple-touch-icon" sizes="72x72" href="./static/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="96x96" href="./static/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" sizes="128x128" href="./static/icons/icon-128x128.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="./static/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="./static/icons/icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="192x192" href="./static/icons/icon-192x192.png" />
    <link rel="apple-touch-icon" sizes="384x384" href="./static/icons/icon-384x384.png" />
    <link rel="apple-touch-icon" sizes="512x512" href="./static/icons/icon-512x512.png" />
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
