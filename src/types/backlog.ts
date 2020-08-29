import { User } from './user'

export enum Priority {
  Critical = 'Critical',
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export interface Backlog {
  name: string
  description?: string
  point?: number
  priority?: Priority
  assignee?: User
}
