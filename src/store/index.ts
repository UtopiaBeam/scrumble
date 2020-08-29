import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { VuexObject } from 'vuex-class-component/dist/interfaces'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import project from './modules/project'
import epic from './modules/epic'
import auth from './modules/auth'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
})

export const store = new Vuex.Store<VuexObject>({
  modules: {
    ...extractVuexModule(auth),
    ...extractVuexModule(project),
    ...extractVuexModule(epic),
  },
  plugins: [vuexLocal.plugin],
})

export const vxm = {
  auth: createProxy(store, auth),
  project: createProxy(store, project),
  epic: createProxy(store, epic),
}
