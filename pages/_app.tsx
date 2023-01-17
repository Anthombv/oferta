import { useNoScroll } from '../lib/hooks/use_no_scroll';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useNoScroll().set();
  
  return <Component {...pageProps} />
}

export default MyApp
