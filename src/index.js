import { startServer } from "../startServer";
import { typeDefs, resolvers } from "./graphql";

startServer({ typeDefs, resolvers });
