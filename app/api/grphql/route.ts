import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const gql = String.raw;

const resolvers = {

}

const typeDefs = gql``;



const server = new ApolloServer({
    typeDefs,
    resolvers,

});


const handler = startServerAndCreateNextHandler(server)