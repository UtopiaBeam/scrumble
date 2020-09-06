<template>
  <v-dialog v-model="syncedOpen" width="500px">
    <v-card class="pa-2">
      <v-form>
        <v-card-title>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="epic.name"
                class="title"
                label="Name"
                required
              />
            </v-col>
            <v-col cols="auto">
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-avatar v-on="on" :color="epic.color" size="25" />
                </template>
                <v-color-picker v-model="epic.color" show-swatches />
              </v-menu>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-textarea
            v-model="epic.description"
            label="Description"
            filled
            auto-grow
          />
          <v-row no-gutters justify="end">
            <v-col cols="auto">
              <v-btn :ripple="false" text @click="syncedOpen = false"
                >Cancel</v-btn
              >
            </v-col>
            <v-col cols="auto">
              <v-btn color="primary" @click="submit">Save</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'
import { Epic } from '@/types'
import { vxm } from '@/store'

@Component
export default class EpicDialog extends Vue {
  @PropSync('open') syncedOpen!: boolean
  @Prop() op!: string
  @Prop({
    default: () => ({
      name: '',
      description: '',
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }),
  })
  epic!: Epic

  private async submit() {
    if (this.op === 'Add') {
      await vxm.epic.addEpic(this.epic)
    } else {
      await vxm.epic.updateEpic(this.epic)
    }
    this.syncedOpen = false
  }
}
</script>
