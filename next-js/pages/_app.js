import '../styles/globals.css'
import { RowndProvider } from '@rownd/react';


function MyApp({ Component, pageProps }) {
  return (
    <RowndProvider
      appKey="cab1d353-655a-414b-9d33-39fc8f4bf54e">
      <Component {...pageProps} />
    </RowndProvider>
  );
}

export default MyApp
