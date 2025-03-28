// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Import global CSS
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
