import PageContext from "@/hooks/pageContext";
import "@/styles/globals.css";
import "@/styles/home.css";
import "swiper/css";

export default function App({ Component, pageProps }) {
  return (
    <PageContext>
      <Component {...pageProps} />
    </PageContext>
  );
}
