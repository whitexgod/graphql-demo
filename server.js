import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4040).then(({ url }) => {
  console.log(`Your api is running at ${url}`);
});
