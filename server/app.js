const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://Corne:pw1srspro@dev-cluster-bsmvv.mongodb.net/GraphQL?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
    console.log('Connected to database.');
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log('Listening.');
});
