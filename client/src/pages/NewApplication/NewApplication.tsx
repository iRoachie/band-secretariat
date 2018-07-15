import React from 'react'
import { Page, Button } from '../../components'

class NewApplication extends React.Component<{}> {
  saveApplication = () => {
    //
  }

  render() {
    return (
      <Page
        renderHeader={
          <div className="block justify-between items-center sm:flex">
            <h1>
              <span className="text-primary-2"> Applications /</span> New
            </h1>

            <div className="mt-4 sm:mt-0">
              <Button
                appearance="primary"
                iconBefore="ion-md-checkbox"
                onClick={this.saveApplication}
              >
                Save Application
              </Button>
            </div>
          </div>
        }
      >
        <div className="row">
          <div className="col-md-12">
            <p>Yes</p>
          </div>
        </div>
      </Page>
    )
  }
}

export default NewApplication
