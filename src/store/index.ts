import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { VuexObject } from 'vuex-class-component/dist/interfaces'
import { createProxy, extractVuexModule } from 'vuex-class-component'
import epic from './modules/epic'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [],
})

export const store = new Vuex.Store<VuexObject>({
  modules: {
    ...extractVuexModule(epic)
  },
  plugins: [vuexLocal.plugin],
})

export const vxm = {
  epic: createProxy(store, epic),
}
