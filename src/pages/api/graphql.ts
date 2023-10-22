// import { createYoga } from "graphql-yoga";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { schema } from "../../../graphql/schema";

// export default createYoga<{
//   req: NextApiRequest;
//   res: NextApiResponse;
// }>({
//   schema,
//   graphqlEndpoint: "/api/graphql",
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
export default startServerAndCreateNextHandler(apolloServer);
