import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={`${router.asPath}`} />
        </Layout>
      </AnimatePresence>
    </>
  )
};

export default MyApp;
