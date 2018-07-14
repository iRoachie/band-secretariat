import React from 'react'
import { Page, Button, ApplicationCard } from '../../components'

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
        <div className="row">
          <ApplicationCard status="APPLIED" />
          <ApplicationCard status="ASSIGNED" />
          <ApplicationCard status="INCOMPLETE" />
          <ApplicationCard status="PASSED_OUT" />
        </div>
      </Page>
    )
  }
}
export default Applications
