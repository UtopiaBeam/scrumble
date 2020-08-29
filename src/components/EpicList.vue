<template>
  <v-card width="300" color="grey lighten-3" flat>
    <v-card-title class="title">Epics</v-card-title>
    <v-card-text>
      <v-list color="white" class="py-0">
        <template v-for="(epic, idx) in epics">
          <v-divider v-if="idx > 0" :key="`div_${idx}`" />
          <v-list-item
            :key="`epic_${epic.id}`"
            @click="fetchEpic(epic.id)"
            :style="{ borderLeft: `${epic.color} solid 5px` }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="epic.name" />
            </v-list-item-content>
            <v-list-item-action>
              <v-hover v-slot:default="{ hover }">
                <v-btn icon @click.stop="editEpic(epic.id)">
                  <v-icon v-if="hover" color="grey darken-1" small
                    >mdi-pencil</v-icon
                  >
                </v-btn>
              </v-hover>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn block text>+ Add Epic</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { vxm } from '@/store'

@Component({
  computed: {
    epics: () => vxm.epic.epics,
  },
})
export default class EpicList extends Vue {
  async fetchEpic(id: string) {
    console.log('fetch', id)
  }

  async editEpic(id: string) {
    console.log('edit', id)
  }
}
</script>
