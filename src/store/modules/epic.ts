import { createModule, mutation } from 'vuex-class-component'
import { Epic } from '../../types'

const VuexModule = createModule({ namespaced: 'epic' })

export default class extends VuexModule {
  private _epics: Epic[] = [
    { id: '1', name: 'Epic 1', color: 'blue', description: 'Test for epic 1' },
    { id: '2', name: 'Epic 2', color: 'red' },
    { id: '3', name: 'Epic 3', color: 'green' },
  ]
  private _currentEpicId = ''

  get epics() {
    return this._epics
  }

  get epic() {
    return (id: string) => this._epics.find(e => e.id === id)
  }

  get currentEpic() {
    return this.epic(this._currentEpicId)
  }

  @mutation setEpics(epics: Epic[]) {
    this._epics = epics
  }

  @mutation setCurrentEpicId(id: string) {
    this._currentEpicId = id
  }
}
