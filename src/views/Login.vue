<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-card width="450" elevation="4">
          <v-card-title class="text-h4 justify-center">SCRUMBLE</v-card-title>
          <v-card-text class="mt-4">
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="user.username"
                label="Username"
                :error="error"
                outlined
              />
              <v-text-field
                v-model="user.password"
                label="Password"
                :error="error"
                outlined
                type="password"
              />
              <v-row justify="space-between" align="center" no-gutters>
                <v-col cols="auto">
                  Don't have an account? <a href="/register">Register</a>
                </v-col>
                <v-col cols="auto">
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { vxm } from '@/store'

@Component
export default class Login extends Vue {
  private user = {
    username: '',
    password: '',
  }
  private error = false
  private readonly buttons = [
    { service: 'GitHub', color: '#000000', icon: 'mdi-github' },
    { service: 'Google', color: '#DB4437', icon: 'mdi-google' },
    { service: 'Facebook', color: '#4267B2', icon: 'mdi-facebook' },
  ]

  get labelClass() {
    return this.error
      ? 'my-1 red--text font-weight-bold'
      : 'my-1 font-weight-medium'
  }

  async login() {
    try {
      this.error = false
      await vxm.auth.login(this.user)
    } catch {
      this.error = true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
