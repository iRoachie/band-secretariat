import gql from 'graphql-tag'

const GetApplicationsQuery = gql`
  {
    applications {
      id
      firstName
      surName
      photoURL
      status
      phones {
        number
      }
      email
      applicationDate
    }
  }
`

const CreateApplicationMutation = gql`
  mutation CreateApplicationMutation($application: ApplicationCreateInput!) {
    createApplication(data: $application) {
      id
      firstName
      surName
      photoURL
      status
      phones {
        id
        label
        number
      }
      email
      applicationDate
    }
  }
`

export { GetApplicationsQuery, CreateApplicationMutation }
