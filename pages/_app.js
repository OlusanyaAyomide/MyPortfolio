import "@/styles/globals.css";
import { AllContextProvider } from "@/store/AllContext";

export default function App({ Component, pageProps }) {
  return (
    <AllContextProvider>
      <Component {...pageProps} />
    </AllContextProvider>
  );
}
