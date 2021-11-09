import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

async function startServer({ typeDefs, resolvers }) {
  mongoose
    .connect("mongodb://localhost:27017/graphql")
    .then(() => console.log("🔥 Connected database"));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server.listen().then(({ url }) => console.log(`🚀 Server started at ${url}`));
}

export { startServer };
