// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Import global CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import type { AppProps } from 'next/app';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
