<template>
  <div>
    <v-app-bar color="primary" dark dense clipped-left app>
      <v-app-bar-nav-icon v-if="!isLargeScreen" @click="toggleDrawer" />
      <v-toolbar-title>SCRUMBLE</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon><v-icon>mdi-account-circle</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="menu in userMenus"
            :key="menu.title"
            @click="menu.onClick"
            >{{ menu.title }}</v-list-item
          >
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      :mini-variant="isLargeScreen"
      :expand-on-hover="isLargeScreen"
      app
    >
      <v-list-item>
        <v-list-item-icon>
          <v-icon :color="currentProject ? 'primary' : 'default'">{{
            currentProject ? 'mdi-shape' : 'mdi-shape-outline'
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ currentProject ? currentProject.name : 'Select project' }}
        </v-list-item-title>
        <v-btn v-if="!isLargeScreen" icon @click="toggleDrawer"
          ><v-icon>mdi-chevron-left</v-icon></v-btn
        >
      </v-list-item>
      <v-divider />
      <v-list nav dense>
        <v-list-item v-for="menu in navMenus" :key="menu.title" :to="menu.href">
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
import { vxm } from '@/store'

@Component
export default class Navbar extends Vue {
  private drawer = this.isLargeScreen
  private readonly navMenus = [
    { title: 'Board', icon: 'mdi-view-column', href: '/app/board' },
    { title: 'Planning Poker', icon: 'mdi-cards', href: '/app/poker' },
    { title: 'Retrospective', icon: 'mdi-replay', href: '/app/retrospective' },
  ]
  private readonly userMenus = [{ title: 'Logout', onClick: vxm.auth.logout }]

  get isLargeScreen(): boolean {
    return this.$vuetify.breakpoint.lgAndUp
  }

  private toggleDrawer() {
    this.drawer = !this.drawer
  }
}
</script>
