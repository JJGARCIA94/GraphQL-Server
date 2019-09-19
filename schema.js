import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Client {
        id: ID
        firstName: String
        lastName: String
        work: String
        emails: [Email]
    }
    type Email {
        email: String
    }
    type Query {
        client: Client
    }
`);

export default schema;