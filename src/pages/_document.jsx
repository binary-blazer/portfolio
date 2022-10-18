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
            <meta property="og:url" content={config.siteMetadata.url} />
            <meta name="description" content={config.siteMetadata.description} />
            <meta name="theme-color" content={config.siteMetadata.themeColor} />
            <link rel="icon" href={config.siteMetadata.image} type="image/x-icon" /> 
            <link rel="canonical" href={config.siteMetadata.url} />
            <meta name="publisher" content="2022, JanjyTapYT" />
            <meta name="author" content="me@janjytapyt.me" />
            <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };