import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get('/', (req, res) => {
    res.send('Ok');
});

const root = {client: () => {
    return {
        "id": 34345345345,
        "firstName": "jony",
        "lastName": "garcia",
        "work": "Udemy",
        "emails": [
            {"email" : "correo@correo.com"},
            {"email" : "pruebacorreo@correo.com"}
        ]
    }
}};

app.use('/graphql', graphqlHTTP( {
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Server on port 8000');
});