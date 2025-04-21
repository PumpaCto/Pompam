import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/pumpa-logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pumpa Token — The last hope for the broken." />
        <meta property="og:title" content="Pumpa Token" />
        <meta property="og:description" content="Join the movement. One last token to change your destiny." />
        <meta property="og:image" content="/pumpa-logo.png" />
        <meta property="og:url" content="https://officalpumpatokenwebsite.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pumpa Token" />
        <meta name="twitter:description" content="Where the broken find hope." />
        <meta name="twitter:image" content="/pumpa-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
