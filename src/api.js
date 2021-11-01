import express from 'express';
import serverless from 'serverless-http';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import { rootValue } from './resolvers.js';

const app  = express();

import './db/conectDB.js';


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: rootValue,
}));



app.listen( process.env.PORT || 3001, () => {
    console.log('listening')
});