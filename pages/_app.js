import ReactModal from 'react-modal'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'


ReactModal.setAppElement('#__next')

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}

export default MyApp
