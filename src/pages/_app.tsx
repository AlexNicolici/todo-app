import "../styles/Home/Home.css";
import "../styles/Navbar/Navbar.css";
import "../styles/Movies/movies.css";

import Navbar from "./components/Navbar";
import { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
