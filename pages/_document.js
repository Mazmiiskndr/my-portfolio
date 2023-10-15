import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto"
            type="text/css"
            media="all"
          />
          {/* CSS STYLES */}
          <link
            rel="stylesheet"
            href="/assets/css/vendors/bootstrap.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/fonts/font-awesome/css/font-awesome.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/vendors/magnific-popup.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/vendors/splitting.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/vendors/swiper.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/vendors/animate.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/style.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/dark.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="/assets/css/loading.css"
            type="text/css"
            media="all"
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

export default MyDocument;
