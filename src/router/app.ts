import { RouteConfig } from 'vue-router'

export const appRoutes: RouteConfig[] = [
  { path: '', redirect: 'board' },
  {
    path: 'board',
    name: 'Board',
    component: () =>
      import(/* webpackChunkName: "app.board" */ '@/views/app/Board.vue'),
    meta: { title: 'Board' },
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
