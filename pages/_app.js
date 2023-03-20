import "@/styles/globals.css";
import { AllContextProvider } from "@/store/AllContext";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <AllContextProvider>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AllContextProvider>
  );
}
