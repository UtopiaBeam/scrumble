import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { VuexObject } from 'vuex-class-component/dist/interfaces'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import auth from './modules/auth'
import global from './modules/global'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth', 'global'],
})

export const store = new Vuex.Store<VuexObject>({
  modules: {
    ...extractVuexModule(auth),
    ...extractVuexModule(global),
  },
  plugins: [vuexLocal.plugin],
})

export const vxm = {
  auth: createProxy(store, auth),
  global: createProxy(store, global),
}
