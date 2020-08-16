<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-card width="450" elevation="4">
          <v-card-title class="justify-center">SCRUMBLE</v-card-title>
          <v-card-text>
            <p class="my-1 font-weight-medium">Username</p>
            <v-text-field v-model="username" outlined />
            <p class="my-1 font-weight-medium">Password</p>
            <v-text-field v-model="password" outlined type="password" />
            <v-btn color="primary" block large>Login</v-btn>
            <v-btn color="primary" class="mt-2" block text>Register</v-btn>
            <!-- <v-divider class="mt-6" />
            <v-btn
              v-for="button in buttons"
              :key="button.service"
              :color="button.color"
              block
              dark
              large
              class="mt-4"
            >
              <v-icon left>{{ button.icon }}</v-icon>
              Login with {{ button.service }}
            </v-btn>-->
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  private username = ''
  private password = ''
  private readonly buttons = [
    { service: 'GitHub', color: '#000000', icon: 'mdi-github' },
    { service: 'Google', color: '#DB4437', icon: 'mdi-google' },
    { service: 'Facebook', color: '#4267B2', icon: 'mdi-facebook' },
  ]
}
</script>
