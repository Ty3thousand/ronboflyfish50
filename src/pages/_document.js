// _document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Bootstrap CSS */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KyZXEJ1QwK5f2c5dTjiH8t0LCy/s6l4+QLT0b88z5pG28Hsl6zLX48F4HOm6FzP0"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Bootstrap JavaScript (includes Popper.js) */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pzjw8f+ua7Kw1TIq0R2t7t9uL2MGF7TFCr1FdGMyyID0md4eFdw7VvH1p6JxXUoS"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
