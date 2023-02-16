import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Layout from "./layout";
import { Inter } from "@next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className={`${inter.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </Provider>
  );
}
