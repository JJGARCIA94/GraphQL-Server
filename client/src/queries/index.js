import gpl from 'graphql-tag';

export const CLIENTS_QUERY = gpl`{
    getClients{
        id
        firstName
        lastName
        work
    }
}`;

export const CLIENT_QUERY = gpl`
    query SearchClient($id: ID!){
        getClient(id: $id){
          firstName
          lastName
          work
          age
        }
}`;