import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get('/', (req, res) => {
    res.send('Ok');
});

app.use('/graphql', graphqlHTTP( {
    schema,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Server on port 8000');
});