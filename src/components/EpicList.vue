<template>
  <v-card width="300" color="grey lighten-3" flat>
    <v-card-title>Epics</v-card-title>
    <v-card-text>
      <v-list color="grey lighten-3">
        <v-list-item v-for="epic in epics" :key="epic.id" class="mt-3 px-0">
          <EpicCard :epic="epic" />
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn block text>+ Add Epic</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EpicCard from '@/components/EpicCard.vue'

@Component({
  components: {
    EpicCard,
  },
})
export default class EpicList extends Vue {
  menu = false
  epics = [
    { id: '1', name: 'Epic 1', color: 'blue', description: 'Test for epic 1' },
    { id: '2', name: 'Epic 2', color: 'red' },
    { id: '3', name: 'Epic 3', color: 'green' },
  ]
}
</script>
