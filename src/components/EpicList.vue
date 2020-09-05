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
                <v-btn icon @click.stop="editEpic(epic)">
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
      <v-btn block text @click="addEpic">+ Add Epic</v-btn>
    </v-card-actions>
    <EpicDialog
      :open.sync="openDialog"
      :op="epic ? 'Update' : 'Add'"
      :epic="epic"
    />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import { vxm } from '@/store'
import EpicDialog from '@/components/EpicDialog.vue'
import { Epic } from '@/types'

@Component({
  components: {
    EpicDialog,
  },
  computed: {
    epics: () => vxm.epic.epics,
  },
})
export default class EpicList extends Vue {
  private openDialog = false
  @Model() private epic?: Epic

  fetchEpic(id: string) {
    vxm.epic.fetchEpic(id)
  }

  addEpic() {
    this.epic = undefined
    this.openDialog = true
  }

  editEpic(epic: Epic) {
    this.epic = epic
    this.openDialog = true
  }
}
</script>
