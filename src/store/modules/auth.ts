import { createModule, mutation, action } from 'vuex-class-component'
import { RegisterDTO, LoginDTO, User, JwtToken } from '@/types'
import router from '@/router'
import { apolloClient } from '@/plugins/apollo'
import gql from 'graphql-tag'

const VuexModule = createModule({ namespaced: 'auth' })

export default class extends VuexModule {
  private _token = ''
  private _user?: User

  get isLoggedIn() {
    return this._token !== ''
  }

  get token() {
    return this._token
  }

  get user() {
    return this._user
  }

  @mutation
  setToken(token: string) {
    this._token = token
  }

  @mutation
  setUser(user: User) {
    this._user = user
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
      router.push('/app')
    }
  }

  @action
  async logout() {
    this.setToken('')
    router.push('/login')
  }
}
