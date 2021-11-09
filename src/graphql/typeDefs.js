import { print } from "graphql";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";
import fs from "fs";

const typesArray = loadFilesSync(
  path.join(__dirname, "modules", "**", "*.gql")
);
const typeDefs = mergeTypeDefs(typesArray);
const printedTypeDefs = print(typeDefs);
fs.writeFileSync("joined-typeDefs.graphql", printedTypeDefs);

export { typeDefs };
