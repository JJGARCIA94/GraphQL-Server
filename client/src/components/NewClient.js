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
        },
        error: false,
        emails: []
     };

     readEmails = i => e => {
         const newEmail = this.state.emails.map((email, index) => {
            if(i !== index) {
                return email;
            }
            return {
                ...email,
                email: e.target.value
            }
         });
         this.setState({
             emails: newEmail
         })
     }

     newFild = () => {
         this.setState({
             emails: this.state.emails.concat([{email: ''}])
         })
     }

     deleteEmailField = (i) => () => {
         this.setState({
             emails: this.state.emails.filter((email, index) => i !== index) 
         });
     }

    render(){
        const { error } = this.state;
        let response = (error)? <p className="alert alert-danger p-3 text-center">All fields are requireds</p> : '' ;
        return(
            <Fragment>
                <h2 className="text-center">New Client</h2>
                {response}
                <Mutation 
                    mutation={NEW_CLIENT}
                    onCompleted={ () => this.props.history.push('/')}
                >

                { createClient => (
                    <form 
                        className="col-md-12"
                        onSubmit={e=> {
                            e.preventDefault();

                            const { firstName, lastName, work, age, type } = this.state.client;

                            const { emails } = this.state;

                            if(firstName === '' || lastName === '' || work === '' || age === '' || type === '') {
                                this.setState({
                                    error: true
                                });
                                return;
                            }

                            this.setState({
                                error: false
                            });

                            const input = {
                                firstName,
                                lastName,
                                work,
                                age: Number(age),
                                emails,
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
                            <div className="form-group col-md-12">
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
                        </div>
                        <div className="form-row">
                            {this.state.emails.map((input, index)=> (
                                <div key={index} className="form-group col-md-12">
                                    <label>Email {index + 1}:</label>
                                    <div className="input-group">
                                        <input
                                            onChange={this.readEmails(index)}
                                            type="email"
                                            placeholder={"Email " +(index + 1)}
                                            className="form-control"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                onClick={this.deleteEmailField(index)}
                                                type="button"
                                                className="btn btn-danger"
                                            >
                                                &times; Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="form-row">
                            <div className="form-group d-flex justify-content-center col-md-12">
                                    <button
                                        onClick={this.newFild}
                                        type="button"
                                        className="btn btn-warning"
                                    >+ Add email
                                    </button>
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