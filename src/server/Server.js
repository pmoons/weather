const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/typeDefinitions");
const { resolvers } = require("./graphql/resolvers");

let server = null;

exports.Server = {
  start: options => {
    server = new ApolloServer({ typeDefs, resolvers });

    return server.listen(options).then(({ url }) => {
      console.log(`GraphQL server ready at ${url}`);
    });
  },

  stop: () => {
    server.stop();
  }
};
