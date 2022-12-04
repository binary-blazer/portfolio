import '../styles/globals.css';
import { ThemeProvider } from 'context/theme'
import '../styles/globals.css';
import Head from 'next/head';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import config from '../../site.config.js';
import { useCallback } from 'react';

import Header from 'components/Static/Header';
import Footer from 'components/Static/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>{config.title}</title>
      </Head>
      <ThemeProvider>
        <Header />
           <div className="relative">
          <Component {...pageProps} />
        </div>
        <Footer />
        <div className="color-layout layout-blue position-right-top" />
      </ThemeProvider>
    </>
  )
}

export default MyApp
