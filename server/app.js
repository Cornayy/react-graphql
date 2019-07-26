const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const config = require('./config/config');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect(config.connectionString, { useNewUrlParser: true });

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

app.listen(4000, () => {
    console.log('Listening.');
});
