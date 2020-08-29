import { createModule, mutation, action } from 'vuex-class-component'
import { RegisterDTO, LoginDTO, User } from '@/types'
import router from '@/router'

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
    // TODO
    router.replace('/app')
  }
}
