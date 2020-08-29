import { createModule, mutation, action } from 'vuex-class-component'
import { RegisterDTO, LoginDTO, User } from '@/types'
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
    // TODO
    router.replace('/app')
  }

  @action
  async login(loginDTO: LoginDTO) {
    const response = await apolloClient.mutate<{ login: { token: string } }>({
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
}
