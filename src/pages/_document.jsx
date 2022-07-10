import Document, { Head, Html, Main, NextScript } from 'next/document';

class HtmlDocument extends Document {
  render() {
    return (
      <Html
        lang="en-AU"
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
      >
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Princess+Sofia&amp;text=Cass%20Frances"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HtmlDocument;
