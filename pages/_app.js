
import '@/styles/style.css'
import '@/styles/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from '@/components/layouts/Layout'
export default function App({ Component, pageProps }) {
 
  return (
    // <Layout>
      <Component {...pageProps} />
      
    // </Layout>
  );
}
