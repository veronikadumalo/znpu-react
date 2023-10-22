import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
