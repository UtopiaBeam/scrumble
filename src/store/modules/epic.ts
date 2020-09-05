import { createModule, mutation, action } from 'vuex-class-component'
import { Epic } from '@/types'

const VuexModule = createModule({ namespaced: 'epic' })

export default class extends VuexModule {
  private _epics: Epic[] = [
    {
      id: '1',
      name: 'Epic 1',
      color: '#1E88E5',
      description: 'Test for epic 1',
    },
    { id: '2', name: 'Epic 2', color: '#2E7D32' },
    { id: '3', name: 'Epic 3', color: '#EF6C00' },
  ]

  get epics() {
    return this._epics
  }

  get epic() {
    return (id: string) => this._epics.find(e => e.id === id)
  }

  @mutation
  setEpics(epics: Epic[]) {
    this._epics = epics
  }

  @action
  async fetchEpic(id: string) {
    // TODO: Fetch epic by id
  }

  @action
  async addEpic(epic: Epic) {
    this._epics.push({ ...epic, id: this._epics.length + 1 + '' })
  }

  @action
  async updateEpic(epic: Epic) {
    const index = this._epics.findIndex(e => e.id === epic.id)
    this._epics[index] = { ...this._epics[index], ...epic }
  }
}
