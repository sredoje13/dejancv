import '@/styles/globals.css'
import { Provider } from '../../store/context'
export default function App({ Component, pageProps }) {
  return (
    <Provider>
       <Component {...pageProps} />
    </Provider>
 )
}
