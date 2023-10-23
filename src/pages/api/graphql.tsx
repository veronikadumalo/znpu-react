import { schema } from "../../../graphql/schema";
import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({ schema, graphqlEndpoint: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

// export { handleRequest as GET, handleRequest as POST };
