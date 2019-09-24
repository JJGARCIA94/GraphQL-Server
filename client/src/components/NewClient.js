import React, { Component, Fragment } from 'react';
import { NEW_CLIENT } from '../mutations'
import { Mutation } from 'react-apollo';

class NewClient extends Component {
    state = {
        client: {
            firstName: '',
            lastName: '',
            work: '',
            age: '',
            email: '',
            type: ''
        }
     };
    render(){
        return(
            <Fragment>
                <h2 className="text-center">New Client</h2>
                <Mutation mutation={NEW_CLIENT}>

                { createClient => (
                    <form 
                        className="col-md-12"
                        onSubmit={e=> {
                            e.preventDefault();

                            const { firstName, lastName, work, age, email, type } = this.state.client;

                            const input = {
                                firstName,
                                lastName,
                                work,
                                age: Number(age),
                                email,
                                type
                            }

                            createClient({
                                variables: {input}
                            })
                        }}
                    >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>First name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="First name"
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                firstName: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Last name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Last name"
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                lastName: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Work</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Work"
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                work: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email"
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                email: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Age</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Age"
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                age: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Client type</label>  
                                <select
                                    onChange={e => {
                                        this.setState({
                                            client: {
                                                ...this.state.client,
                                                type: e.target.value
                                            }
                                        })
                                    }}
                                    className="form-control">
                                    <option value="">Choose one...</option>
                                    <option value="PREMIUM">PREMIUM</option>
                                    <option value="BASIC">BASIC</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                    </form>
                ) }
                </Mutation>
            </Fragment>
        )
    }
}

export default NewClient;