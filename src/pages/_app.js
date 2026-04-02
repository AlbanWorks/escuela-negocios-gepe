import "@/styles/normalize.css";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={outfit.variable}>
      <Component {...pageProps} />
    </main>
  );
}