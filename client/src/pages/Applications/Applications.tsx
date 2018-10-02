import React from 'react'
import { Query } from 'react-apollo'
import { Button, Spin, Icon } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import { Page, ApplicationCard, Breadcrumbs } from '../../components'
import { GetApplicationsQuery } from '../../graphql'
import { Application } from '../../../../server/src/generated/prisma'

interface State {
  search: string
}

class Applications extends React.Component<RouteComponentProps<{}>, State> {
  newApplication = () => {
    this.props.history.push('/applications/new')
  }

  filter = () => {
    //
  }

  render() {
    return (
      <Page
        renderHeader={
          <div className="block justify-between items-center sm:flex">
            <Breadcrumbs entries={['Applications']} />

            <div className="mt-4 sm:mt-0">
              <Button className="mr-4" onClick={this.filter}>
                Filter
                <Icon type="filter" />
              </Button>

              <Button type="primary" onClick={this.newApplication}>
                <Icon type="plus" />
                New Application
              </Button>
            </div>
          </div>
        }
      >
        <Query query={GetApplicationsQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div className="text-center">
                  <Spin
                    indicator={
                      <Icon type="loading" style={{ fontSize: 24 }} spin />
                    }
                  />
                </div>
              )
            }

            if (error) {
              return <p className="text-center">Error! {error.message}</p>
            }

            return (
              <div className="row">
                {data.applications.length === 0 ? (
                  <p className="text-center">No Applications</p>
                ) : (
                  <ApplicationGrid className="px-4">
                    {data.applications.map((a: Application) => (
                      <ApplicationCard key={a.id} application={a} />
                    ))}
                  </ApplicationGrid>
                )}
              </div>
            )
          }}
        </Query>
      </Page>
    )
  }
}

const ApplicationGrid = styled.section`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 3fr));
  padding-bottom: 2rem;
`
export default Applications
