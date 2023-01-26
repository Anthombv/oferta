import { useNoScroll } from "../lib/hooks/use_no_scroll";
import { ToastContainer } from "../lib/components/toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useNoScroll().set();

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
