import '../styles/globals.css';
import '../styles/tippy.css';
import '../styles/nprogress.css';
import { ThemeProvider } from 'context/theme'
import Head from 'next/head';
import config from '../../site.config.js';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import Header from 'components/Static/Header';
import Footer from 'components/Static/Footer';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  NProgress.configure({ showSpinner: true });

  const handleRouteChange = useCallback((url) => {
    NProgress.start();
  }, []);

  const handleRouteChangeComplete = useCallback((url) => {
    NProgress.done();
  }, []);

  const handleRouteChangeError = useCallback((url) => {
    NProgress.done();
  }, []);

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events, handleRouteChange, handleRouteChangeComplete, handleRouteChangeError]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://api.lanyard.rest/v1/users/" + config.IndexPage.lanyard.id)
        .then((res) => res.json())
        .then((data) => {
          window?.localStorage?.setItem("lanyard", JSON.stringify(data.data));
        });
    }, 1000);
  }, []);

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
      </ThemeProvider>
      
      <div className="color-layout layout-blue position-right-top" />
      <div className="color-layout layout-blue-2 position-left-bottom" />
    </>
  )
}

export default MyApp
