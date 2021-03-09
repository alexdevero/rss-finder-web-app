import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='RSS Finder Web App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='RSS Finder Web App' />
          <meta name='description' content='Web app to help you find URLs for existing RSS feeds from website URLs.' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/icons/site.webmanifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://rss-finder-web-app.vercel.app' />
          <meta name='twitter:title' content='RSS Finder Web App' />
          <meta name='twitter:description' content='Web app to help you find URLs for existing RSS feeds from website URLs.' />
          <meta name='twitter:image' content='https://rss-finder-web-app.vercel.app/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@alexdevero' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='RSS Finder Web App' />
          <meta property='og:description' content='Web app to help you find URLs for existing RSS feeds from website URLs.' />
          <meta property='og:site_name' content='RSS Finder Web App' />
          <meta property='og:url' content='https://rss-finder-web-app.vercel.app' />
          <meta property='og:image' content='https://rss-finder-web-app.vercel.app/icons/apple-touch-icon.png' />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />

          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta2/css/bootstrap.min.css" integrity="sha512-aqT9YD5gLuLBr6ipQAS+72o5yHKzgZbGxEh6iY8lW/r6gG14e2kBTAJb8XrxzZrMOgSmDqtLaF76T0Z6YY2IHg==" crossOrigin="anonymous" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
