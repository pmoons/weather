const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
const { typeDefs } = require("./graphql/typeDefinitions");
const { resolvers } = require("./graphql/resolvers");

let server = null;

exports.Server = {
  start: options => {
    const { parsed } = dotenv.config();

    console.log("parsed", parsed);
    if (Object.keys(parsed).some(key => !process.env[key])) {
      throw new Error(
        "Undefined environment variable detected. Check your .env file to know what values to set."
      );
    }

    server = new ApolloServer({ typeDefs, resolvers });

    return server.listen(options).then(({ url }) => {
      console.log(`GraphQL server ready at ${url}`);
    });
  },

  stop: () => {
    server.stop();
  }
};
