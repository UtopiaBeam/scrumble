import { createModule, mutation, action } from 'vuex-class-component'
import { Project } from '../../types/project'

const VuexModule = createModule({ namespaced: 'project' })

export default class extends VuexModule {
  private _projects: Project[] = []

  get projects() {
    return this._projects
  }

  get project() {
    return (id: string) => this._projects.find(p => p.id === id)
  }

  @mutation setProjects(projects: Project[]) {
    this._projects = projects
  }

  @action async fetchProjects() {
    this.setProjects([])
  }
}
