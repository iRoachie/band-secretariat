import React from 'react'

import {
  Page,
  Button,
  Breadcrumbs,
  Panel,
  Input,
  Select,
} from '../../components'
import countries from '../../data/countries'
import { Value } from '../../types'

interface State {
  firstName: string
  lastName: string
  country: Value
}

class NewApplication extends React.Component<{}, State> {
  state = {
    firstName: '',
    lastName: '',
    country: '',
  }

  updateValue = (data: Partial<State>) => {
    this.setState(data as State)
  }

  saveApplication = () => {
    //
  }

  render() {
    return (
      <Page
        renderHeader={
          <div className="block justify-between items-center sm:flex">
            <Breadcrumbs entries={['Applications', 'New']} />

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
          <div className="col-md-6">
            <Panel title="Personal">
              <div className="row">
                <div className="col-md-6">
                  <Input
                    label="First Name"
                    value={this.state.firstName}
                    onChangeText={firstName => this.updateValue({ firstName })}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label="Last Name"
                    value={this.state.lastName}
                    onChangeText={lastName => this.updateValue({ lastName })}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Select
                    label="Country"
                    options={countries.map(a => ({
                      label: a.name,
                      value: a.code,
                    }))}
                    value={this.state.country}
                    onChange={value => this.updateValue({ country: value })}
                  />
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-md-6">
            <Panel title="Contact">
              <p>Yes</p>
            </Panel>
          </div>
        </div>
      </Page>
    )
  }
}

export default NewApplication
