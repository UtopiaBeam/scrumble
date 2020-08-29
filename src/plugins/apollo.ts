import { HttpLink } from 'apollo-link-http'
import { vxm } from '@/store'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo, { ApolloProvider } from 'vue-apollo'
import Vue from 'vue'
import { setContext } from 'apollo-link-context'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: `${process.env.VUE_APP_SERVER_URL}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  const token = vxm.auth.token
  if (headers && token) {
    headers.authorization = `Bearer ${token}`
  }
  return headers
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const apolloProvider = new ApolloProvider({
  defaultClient: apolloClient,
})

export default apolloProvider
