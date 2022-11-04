const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(
  `
    type Query {
        hello: String,
        hello_from_TH: String,
        goodbye: String
    }
    `
);

const rootValue = {
  hello: () => "Hello world",
  hello_from_TH: () => "sawaddee",
  goodbye: () => "good bye",
};

const source = `{ hello, hello_from_TH }`;

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});


graphql({ schema, source : `{goodbye}`, rootValue }).then((response) => {
  console.log(response);
});
