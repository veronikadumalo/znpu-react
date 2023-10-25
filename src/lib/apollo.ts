import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { createNetworkStatusNotifier } from "react-apollo-network-status";

const { link } = createNetworkStatusNotifier();

const apolloClient = new ApolloClient({
  link: link.concat(
    createHttpLink({
      uri: "https://graphql-api-ozx5.onrender.com/graphql",
    })
  ),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default apolloClient;
