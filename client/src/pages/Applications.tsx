import React from 'react'
import { Page, Form } from 'tabler-react'

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
      <Page.Content>
        <Page.Header
          title="Applications"
          options={
            <React.Fragment>
              <Form.Input
                icon="search"
                value={this.state.search}
                placeholder="Search applications"
                onChange={({ target }: any) => this.updateState(target.value)}
              />
            </React.Fragment>
          }
        />
        <p>Hey</p>
      </Page.Content>
    )
  }
}
export default Applications
