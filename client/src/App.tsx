import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { Header } from './components'
import { LoadingProvider } from './containers/Loading'
import { Applications, NewApplication } from './pages'
import client from './config/graphql'

const App = () => (
  <ApolloProvider client={client}>
    <LoadingProvider>
      <Router>
        <>
          <Header />

          <Switch>
            <Redirect exact path="/" to="/applications" />
            <Route exact path="/applications" component={Applications} />
            <Route exact path="/applications/new" component={NewApplication} />
          </Switch>
        </>
      </Router>
    </LoadingProvider>
  </ApolloProvider>
)

export default App
