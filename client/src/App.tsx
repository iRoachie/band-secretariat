import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import { SiteWrapper } from './components'
import { Applications } from './pages'
import client from './config/graphql'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <SiteWrapper>
        <Switch>
          <Route exact path="/" component={Applications} />
        </Switch>
      </SiteWrapper>
    </Router>
  </ApolloProvider>
)

export default App