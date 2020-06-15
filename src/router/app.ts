import { RouteConfig } from 'vue-router'

export const appRoutes: RouteConfig[] = [
  { path: '', redirect: 'backlog' },
  {
    path: 'backlog',
    name: 'Backlog',
    component: () =>
      import(/* webpackChunkName: "app.backlog" */ '@/views/app/Backlog.vue'),
  },
  {
    path: 'board',
    name: 'Kanban Board',
    component: () =>
      import(/* webpackChunkName: "app.board" */ '@/views/app/KanbanBoard.vue'),
  },
  {
    path: 'report',
    name: 'Report',
    component: () =>
      import(/* webpackChunkName: "app.report" */ '@/views/app/Report.vue'),
  },
  {
    path: 'poker',
    name: 'Planning Poker',
    component: () =>
      import(/* webpackChunkName: "app.poker" */ '@/views/app/Poker.vue'),
  },
  {
    path: 'retrospective',
    name: 'Retrospective',
    component: () =>
      import(
        /* webpackChunkName: "app.retrospective" */ '@/views/app/Retrospective.vue'
      ),
  },
  { path: '*', redirect: 'backlog' },
]
