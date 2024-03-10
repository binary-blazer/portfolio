import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />

        {/* Below are the meta tags for the website link embeds */}
        <meta property="og:title" content="BinaryBlazer" />
        <meta property="og:description" content="Hey, I'm BinaryBlazer, a 15 year old developer from Germany. I'm a full-stack developer, and I'm currently learning Elixir." />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/971049189377179718/1149951052070780979/BinaryBlazer.png" />
        <meta property="og:url" content="https://binaryblazer.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BinaryBlazer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="de_DE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BinaryBlazer" />
        <meta name="twitter:creator" content="@BinaryBlazer" />
        <meta name="twitter:title" content="BinaryBlazer" />
        <meta name="twitter:description" content="Hey, I'm BinaryBlazer, a 15 year old developer from Germany. I'm a full-stack developer, and I'm currently learning Elixir." />
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/971049189377179718/1149951052070780979/BinaryBlazer.png" />

        <meta name="theme-color" content="#150136" />
      </body>
    </Html>
  )
}
