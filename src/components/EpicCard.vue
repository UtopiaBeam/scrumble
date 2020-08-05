<template>
  <v-card width="100%" :style="border(epic.color)">
    <v-card-title class="subtitle-1">
      {{ epic.name }}
      <v-spacer />
      <v-menu v-model="openMenu" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(menu, idx) in menus"
            :key="`menu_${idx}`"
            @click="menu.onClick"
          >
            <v-list-item-title :class="menu.style">{{
              menu.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-text v-if="epic.description">
      {{ epic.description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { EpicCard as Card } from '@/types'

@Component
export default class EpicCard extends Vue {
  @Prop() epic!: Card
  openMenu = false
  menus = [
    {
      text: 'Edit',
      onClick: () => {
        console.log('Edit')
      },
    },
    {
      text: 'Delete',
      style: 'red--text',
      onClick: () => {
        console.log('Delete')
      },
    },
  ]

  border(color: string) {
    return {
      borderLeft: `${color} solid 6px`,
    }
  }
}
</script>
