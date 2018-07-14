import React from 'react'
import { Page } from '../components'

interface State {
  search: string
}

class Applications extends React.Component<{}, State> {
  state = {
    search: '',
  }

  updateState = (search: string) => {
    this.setState({ search })
  }

  render() {
    return (
      <Page title="Applications">
        <p>Hey</p>
      </Page>
    )
  }
}
export default Applications
