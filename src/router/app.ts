import { RouteConfig } from 'vue-router'

export const appRoutes: RouteConfig[] = [
  { path: '', redirect: 'backlog' },
  {
    path: 'backlog',
    name: 'Backlog',
    component: () =>
      import(/* webpackChunkName: "app.backlog" */ '@/views/app/Backlog.vue'),
    meta: { title: 'Backlog' },
  },
  {
    path: 'board',
    name: 'Board',
    component: () =>
      import(/* webpackChunkName: "app.board" */ '@/views/app/Board.vue'),
    meta: { title: 'Board' },
  },
  {
    path: 'report',
    name: 'Report',
    component: () =>
      import(/* webpackChunkName: "app.report" */ '@/views/app/Report.vue'),
    meta: { title: 'Report' },
  },
  {
    path: 'poker',
    name: 'Planning Poker',
    component: () =>
      import(/* webpackChunkName: "app.poker" */ '@/views/app/Poker.vue'),
    meta: { title: 'Planning Poker' },
  },
  {
    path: 'retrospective',
    name: 'Retrospective',
    component: () =>
      import(
        /* webpackChunkName: "app.retrospective" */ '@/views/app/Retrospective.vue'
      ),
    meta: { title: 'Retrospective' },
  },
  { path: '*', redirect: 'backlog' },
]
