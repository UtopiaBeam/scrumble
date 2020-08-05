<template>
  <v-row justify="space-between">
    <v-col cols="auto">
      <EpicList />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EpicList from '@/components/EpicList.vue'

@Component({
  components: {
    EpicList,
  },
})
export default class Backlog extends Vue {}
</script>
