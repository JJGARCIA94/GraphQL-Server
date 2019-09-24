import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', { useNewUrlParser: true, useUnifiedTopology: true });

const clientsSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    work: String,
    email: String,
    age: Number,
    type: String,
    orders: Array
});

const Clients = mongoose.model('clients', clientsSchema);

export { Clients };