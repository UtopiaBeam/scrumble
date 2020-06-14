<template>
  <div>
    <v-app-bar color="primary" dark dense clipped-left app>
      <v-toolbar-title>SCRUMBLE</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" expand-on-hover mini-variant clipped app>
      <v-list nav dense>
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
  private drawer = true
  private readonly menus = [
    { title: 'Backlog', icon: 'mdi-view-list', href: '/backlog' },
    { title: 'Kanban Board', icon: 'mdi-trello', href: '/board' },
    { title: 'Report', icon: 'mdi-file-document', href: '/report' },
  ]
}
</script>
