import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../../graphql/schema";

const { handleRequest } = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Response: Response,
    Request: Request,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export { handleRequest as GET, handleRequest as POST };
