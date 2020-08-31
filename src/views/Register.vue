<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-card width="450" elevation="4">
          <v-card-title class="text-h4 justify-center">SCRUMBLE</v-card-title>
          <v-card-text class="mt-4">
            <v-form ref="form" v-model="formValid" @submit.prevent="register">
              <v-text-field
                v-model="user.username"
                label="Username"
                :rules="rules.username"
                :error="error"
                outlined
              />
              <v-text-field
                v-model="user.email"
                label="Email"
                :rules="rules.email"
                :error="error"
                outlined
              />
              <v-text-field
                v-model="user.password"
                label="Password"
                :rules="rules.password"
                :error="error"
                outlined
                type="password"
                persistent-hint
              >
                <template v-slot:append>
                  <v-tooltip right>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on" color="grey">mdi-alert-circle</v-icon>
                    </template>
                    Password must consists of
                    <ul>
                      <li>8 characters or more</li>
                      <li>One lowercase character</li>
                      <li>One uppercase character</li>
                      <li>One numeric character</li>
                    </ul>
                  </v-tooltip>
                </template>
              </v-text-field>
              <v-text-field
                v-model="confirmPassword"
                label="Confirm password"
                :error="error"
                :rules="rules.confirmPassword"
                outlined
                type="password"
              />
              <v-row justify="space-between" align="center" no-gutters>
                <v-col cols="auto">
                  Already have an account? <a href="/login">Login</a>
                </v-col>
                <v-col cols="auto">
                  <v-btn type="submit" color="primary">Register</v-btn>
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
export default class Register extends Vue {
  private user = {
    username: '',
    email: '',
    password: '',
  }
  private error = false
  private formValid = true
  private confirmPassword = ''
  private readonly rules = {
    username: [(v: string) => v.trim().length > 0 || 'Username is required.'],
    email: [
      (v: string) => !!v || 'Email is required.',
      (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid.',
    ],
    password: [
      (v: string) =>
        v.length >= 8 || 'Password must be at least 8 characters long.',
      (v: string) =>
        /[a-z]/g.test(v) ||
        'Password must consists of one lowercase character.',
      (v: string) =>
        /[A-Z]/g.test(v) ||
        'Password must consists of one uppercase character.',
      (v: string) =>
        /[\d]/g.test(v) || 'Password must consists of one numeric character.',
    ],
    confirmPassword: [
      (v: string) => v === this.user.password || 'Password mismatched',
    ],
  }

  async register() {
    try {
      this.error = false
      await vxm.auth.register(this.user)
    } catch (e) {
      console.error(e)
      this.error = true
    }
  }
}
</script>

<style lang="scss" scope>
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
