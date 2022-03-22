import express from 'express';
const { graphqlHTTP } = require('express-graphql');
const { schema, resolver } = require('./schema');
//const mongoose = require("mongoose")
require('dotenv').config();
const app = express();
app.use(express.json());

app.use(
    process.env.GRAPHPATH,
    graphqlHTTP((request, response, graphQLParams) => ({
        schema,
        rootValue: resolver,
        graphiql: true,
        context: {
            request,
            response,
        },
    }))
);
//mongoose.connect(process.env.DATABASE_URL);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Running ${port}`);
});