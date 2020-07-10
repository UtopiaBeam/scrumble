import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { VuexObject } from 'vuex-class-component/dist/interfaces'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [],
})

export const store = new Vuex.Store<VuexObject>({
  modules: {},
  plugins: [vuexLocal.plugin],
})

export const vxm = {}
