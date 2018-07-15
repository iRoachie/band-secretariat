import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Spinner from '@atlaskit/spinner'

import { Page, Button, ApplicationCard } from '../../components'
import { Application } from '../../../../server/src/generated/prisma'

const GET_APPLICATIONS = gql`
  {
    applications {
      id
      firstName
      surName
      photoURL
      status
      phone {
        number
      }
      email
      applicationDate
    }
  }
`

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
        <Query query={GET_APPLICATIONS}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div className="text-center">
                  <Spinner />
                </div>
              )
            }

            if (error) {
              return <p className="text-center">Error! {error.message}</p>
            }

            return (
              <div className="row">
                {data.applications.length === 0 && (
                  <p className="text-center">No Applications</p>
                )}

                {data.applications.map((a: Application) => (
                  <ApplicationCard key={a.id} application={a} />
                ))}
              </div>
            )
          }}
        </Query>
      </Page>
    )
  }
}
export default Applications
