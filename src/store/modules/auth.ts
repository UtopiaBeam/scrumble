import { createModule, mutation, action } from 'vuex-class-component'
import { RegisterDTO, LoginDTO, User, JwtToken } from '@/types'
import router from '@/router'
import { apolloClient } from '@/plugins/apollo'
import gql from 'graphql-tag'

const VuexModule = createModule({ namespaced: 'auth' })

export default class extends VuexModule {
  token = ''
  me?: User

  get isLoggedIn() {
    return this.token !== ''
  }

  @mutation
  setToken(token: string) {
    this.token = token
  }

  @mutation
  setMe(me: User) {
    this.me = me
  }

  @action
  async register(registerDTO: RegisterDTO) {
    const response = await apolloClient.mutate<{ register: JwtToken }>({
      mutation: gql`
        mutation register($data: RegisterMutation!) {
          register(data: $data) {
            token
          }
        }
      `,
      variables: {
        data: registerDTO,
      },
      fetchPolicy: 'no-cache',
    })
    if (response.data) {
      this.setToken(response.data.register.token)
      this.fetchMe()
      router.push('/app')
    }
  }

  @action
  async login(loginDTO: LoginDTO) {
    const response = await apolloClient.mutate<{ login: JwtToken }>({
      mutation: gql`
        mutation login($data: LoginMutation!) {
          login(data: $data) {
            token
          }
        }
      `,
      variables: {
        data: loginDTO,
      },
      fetchPolicy: 'no-cache',
    })
    if (response.data) {
      this.setToken(response.data.login.token)
      this.fetchMe()
      router.push('/app')
    }
  }

  @action
  async fetchMe() {
    const response = await apolloClient.query<{ me: User }>({
      query: gql`
        query me {
          me {
            id
            username
            email
          }
        }
      `,
    })
    if (response.data) {
      this.setMe(response.data.me)
    }
  }

  @action
  async logout() {
    this.setToken('')
    router.push('/login')
  }
}
