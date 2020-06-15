<template>
  <div>
    <v-app-bar color="primary" dark dense clipped-left app>
      <v-app-bar-nav-icon v-if="!isLargeScreen" @click="toggleDrawer" />
      <v-toolbar-title>SCRUMBLE</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      :mini-variant="isLargeScreen"
      :expand-on-hover="isLargeScreen"
      app
    >
      <v-list nav dense>
        <v-list-item v-if="!isLargeScreen" @click="toggleDrawer">
          <v-list-item-icon>
            <v-icon>mdi-page-first</v-icon>
          </v-list-item-icon>
          <v-list-item-content />
        </v-list-item>
        <v-divider />
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.href">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  private drawer = this.isLargeScreen
  private readonly menus = [
    { title: 'Backlog', icon: 'mdi-view-list', href: '/app/backlog' },
    { title: 'Kanban Board', icon: 'mdi-view-column', href: '/app/board' },
    { title: 'Report', icon: 'mdi-file-document', href: '/app/report' },
    { title: 'Planning Poker', icon: 'mdi-cards', href: '/app/poker' },
    { title: 'Retrospective', icon: 'mdi-replay', href: '/app/retrospective' },
  ]

  get isLargeScreen(): boolean {
    return this.$vuetify.breakpoint.lgAndUp
  }

  private toggleDrawer() {
    this.drawer = !this.drawer
  }
}
</script>
