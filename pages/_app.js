import Layout from "@/Components/layout/layout";
import "../styles/global.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
 weight: ["300", "400", "500", "600", "700", "800", "900"],
 subsets: ["latin"],
 display: "swap",
 variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
 return (
  <div className={`${poppins.variable}`}>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </div>
 );
}
