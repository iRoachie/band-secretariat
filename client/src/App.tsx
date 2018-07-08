import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { SiteWrapper } from './components'
import { Applications } from './pages'

const App = () => (
  <Router>
    <SiteWrapper>
      <Switch>
        <Route exact path="/" component={Applications} />
      </Switch>
    </SiteWrapper>
  </Router>
)

export default App
