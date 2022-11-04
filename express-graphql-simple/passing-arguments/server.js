const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        hello: String
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

const root = {
  hello: () => {
    return "Hello world";
  },
  rollDice: (args) => {
    const output = [];
    for (let i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
    }

    return output;
  },
};

const app = express();

app.use(
  "/gql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`Running a GraphQL API server at port: ${4000}/gql`);
});
