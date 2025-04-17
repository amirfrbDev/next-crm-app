import ReactModal from 'react-modal'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'


ReactModal.setAppElement('#__next')

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
