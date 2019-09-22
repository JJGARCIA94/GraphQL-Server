import gpl from 'graphql-tag';

export const CLIENTS_QUERY = gpl`{
    getClients{
        id
        firstName
        lastName
        work
    }
}`;