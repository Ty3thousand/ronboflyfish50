// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags for SEO */}
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Fly Fishing in All 50 States - A comprehensive guide to the best fishing spots."
          />

          {/* Bootstrap CSS */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-ZlNlT6mF8WW7OVrA44HheJt6yAZUp/Eg1GhlG0V+/Xx4s5A5/5AI5q5K0z8kuw4G"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Bootstrap JavaScript (includes Popper.js) */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-QWV4EWRuCp7xtZRYqog1nCqQ+ZLsT3MoeNBHrH6jMtn9C8PR+G5n5GSXe2PCrYyA"
            crossOrigin="anonymous"
            defer
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
