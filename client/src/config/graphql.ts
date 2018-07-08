import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_ENDPOINT,
})

export default client
