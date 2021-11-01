import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import { rootValue } from './resolvers.js';
// import { getAll } from "./db/query.js";

const app  = express();

import './db/conectDB.js';


app.get('/', async (req, res) => {
    // const data = await getAll();
    res.json({
        data: 'data'
    });
});


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: rootValue,
}));



app.listen(3001, () => {
    console.log('listening port 3001')
})