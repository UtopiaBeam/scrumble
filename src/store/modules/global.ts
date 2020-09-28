import { createModule, mutation } from 'vuex-class-component'

const VuexModule = createModule({ namespaced: 'global' })

export default class extends VuexModule {
  isDarkTheme = false

  @mutation
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
  }
}
