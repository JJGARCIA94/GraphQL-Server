import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get('/', (req, res) => {
    res.send('Ok');
});

const root = {hola: () => "Hello World from GraphQL"};

app.use('/graphql', graphqlHTTP( {
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Server on port 8000');
});