import '../styles/globals.css';
import { ThemeProvider } from 'context/theme'
import '../styles/globals.css';
import Head from 'next/head';
import config from '../../site.config.js';

import Header from 'components/Static/Header';
import Footer from 'components/Static/Footer';

import Cursor from 'components/Global/Cursor';

function MyApp({ Component, pageProps }) {
 
  return <>
      <Head>
          <title>{config.siteMetadata.title}</title>
          <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>
        <ThemeProvider>
        <main>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Cursor />
          <div className="color-layout layout-blue position-right-top" />
        </main>
        </ThemeProvider>
  </>
}

export default MyApp
