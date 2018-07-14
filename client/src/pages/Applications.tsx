import React from 'react'
import { Page, Button } from '../components'

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

  addApplication = () => {
    //
  }

  filter = () => {
    //
  }

  render() {
    return (
      <Page
        renderHeader={
          <div className="block justify-between items-center sm:flex">
            <h1>Applications</h1>

            <div className="mt-4 sm:mt-0">
              <Button
                className="mr-4"
                iconAfter="ion-md-funnel"
                onClick={this.filter}
              >
                Filter
              </Button>

              <Button
                appearance="primary"
                iconBefore="ion-md-add"
                onClick={this.addApplication}
              >
                Add Application
              </Button>
            </div>
          </div>
        }
      >
        <p>Hey</p>

        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="col-md-1" />
        </div>
      </Page>
    )
  }
}
export default Applications
