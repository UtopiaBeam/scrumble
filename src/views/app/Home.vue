<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid>
        <v-card flat>
          <v-card-title class="headline font-weight-bold">{{
            $route.meta.title
          }}</v-card-title>
          <v-card-text class="pt-12">
            <router-view />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar,
  },
})
export default class AppHome extends Vue {}
</script>
