const express = require('express')
const { graphqlHTTP} = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {
    hello: () => {
        return 'Hello world'
    }
}

const app = express();

app.use('/gql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log(`Running a GraphQL API server at port: ${4000}/gql`)
})