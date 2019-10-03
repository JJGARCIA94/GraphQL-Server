import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header';
import Clients from './components/Clients';
import NewClient from './components/NewClient';
import UpdateClient from './components/UpdateClient';

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Clients} />
              <Route exact path="/clients/new" component={NewClient} />
              <Route exact path="/clients/update/:id" component={UpdateClient} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
