import mongoose from 'mongoose';
import { Clients } from './db'
import { rejects } from 'assert';

export const resolvers = {
    Query: {
        getClients: (root, { limit }) => {
            return Clients.find({}).limit(limit);
        },
        getClient : (root, { id }) => {
            return new Promise((resolve, object) => {
                Clients.findById(id, (error, client) => {
                    if(error){
                        rejects(error);
                    }
                    else{
                        resolve(client);
                    }
                });
            });
        }
    },
    Mutation: {
        createClient: (root, { input }) => {
            const newClient = new Clients({
                firstName : input.firstName,
                lastName : input.lastName,
                work : input.work,
                email : input.email,
                age : input.age,
                type : input.type,
                orders : input.orders,
            });
            newClient.id = newClient._id;

            return new Promise((resolve, object) => {
                newClient.save((error) => {
                    if(error){
                        rejects(error);
                    }
                    else{
                        resolve(newClient);
                    }
                });
            });
        },
        updateClient: (root, {input}) => {
            return new Promise((resolve, object) => {
                Clients.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, client) => {
                    if(error){
                        rejects(error);
                    }
                    else{
                        resolve(client);
                    }
                });
            });
        },
        deleteClient: (root, {id}) => {
            return new Promise((resolve, object) => {
                Clients.findOneAndRemove({ _id: id }, (error) => {
                    if(error){
                        rejects(error);
                    }
                    else{
                        resolve("Client deleted");
                    }
                });
            });
        }
    }
}