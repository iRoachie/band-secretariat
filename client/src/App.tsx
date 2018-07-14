import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { Header } from './components'
import { Applications } from './pages'
import client from './config/graphql'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path="/applications" component={Applications} />
        </Switch>
      </>
    </Router>
  </ApolloProvider>
)

export default App
