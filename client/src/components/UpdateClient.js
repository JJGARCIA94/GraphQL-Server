import React, { Component, Fragment } from 'react';
import { CLIENT_QUERY } from '../queries';
import { Query } from 'react-apollo';

class UpdateClient extends Component {
    state = { };
    render(){
        const { id } = this.props.match.params;
        console.log(id);

        return(
            <Fragment>
                <h2 className="text-center">Update Client</h2>
                <Query query={CLIENT_QUERY} variables={{id}}>
                    {({ loading, error, data }) => {
                        if(loading){
                            return 'Loading...';
                        }
                        if(error){
                            return `Error! ${error.message}`;
                        }
                        console.log(data);
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default UpdateClient;