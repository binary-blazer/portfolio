import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../../site.config';

export default function MyDocument() {
    return (
        <Html lang="en">
        <Head>
            <meta name="googlebot" content="index" />
            <meta name="googlebot-news" content="snippet" />
            <meta name="robots" content="follow" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@JanjyTapYT" />
            <meta name="twitter:creator" content="@JanjyTapYT" />
            <meta name="twitter:title" content={config.siteMetadata.title} />
            <meta name="twitter:description" content={config.siteMetadata.description} />
            <meta name="twitter:image" content={config.siteMetadata.image} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={config.siteMetadata.title} />
            <meta property="og:title" content={config.siteMetadata.title} />
            <meta property="og:description" content={config.siteMetadata.description} />
            <meta property="og:image" content={config.siteMetadata.image} />
            <meta property="og:url" content={config.siteMetadata.url} />
            <meta name="description" content={config.siteMetadata.description} />
            <meta name="theme-color" content={config.siteMetadata.themeColor} />
            <link rel="canonical" href={config.siteMetadata.url} />
            <meta name="publisher" content="2022, JanjyTapYT" />
            <meta name="author" content="me@janjytapyt.me" />
            <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
            <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };