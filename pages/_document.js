import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#06202A] text-gray-300 debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;