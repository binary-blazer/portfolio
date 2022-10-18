import '../styles/globals.css';
import { ThemeProvider } from 'context/theme'
import '../styles/globals.css';
import ContextMenu, { Item } from 'components/Global/ContextMenu';
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
          <ContextMenu
            content={event => <>
               <div>
                {event.hasBack && (<Item icon={<i className="fa fa-arrow-left" />} text="Back" kbd={["Alt", "◀"]} onClick={event.goBack} />)}
                {event.hasForward && (<Item icon={<i className="fa fa-arrow-right" />} text="Forward" kbd={["Alt", "▶"]} onClick={event.goForward} />)}
                <Item icon={<i className="fa fa-redo" />} text="Refresh" kbd={["Ctrl", "R"]} onClick={event.refreshPage} />
              </div>
              <div className="pt-2">
                <Item icon={<i className="fa fa-code" />} text="View Source" onClick={event.viewSource} />
              </div>
            </>}
          />
          <div className="color-layout layout-blue position-right-top" />
        </main>
        </ThemeProvider>
  </>
}

export default MyApp
