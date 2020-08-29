<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-card width="450" elevation="4">
          <v-card-title class="text-h4 justify-center">SCRUMBLE</v-card-title>
          <v-card-text>
            <p class="my-1 font-weight-medium">Username</p>
            <v-text-field v-model="user.username" outlined />
            <p class="my-1 font-weight-medium">Email</p>
            <v-text-field v-model="user.email" outlined />
            <p class="my-1 font-weight-medium">Password</p>
            <v-text-field v-model="user.password" outlined type="password" />
            <p class="my-1 font-weight-medium">Confirm password</p>
            <v-text-field v-model="confirmPassword" outlined type="password" />
            <v-row justify="space-between" align="center" no-gutters>
              <v-col cols="auto">
                Already have an account? <a href="/login">Login</a>
              </v-col>
              <v-col cols="auto">
                <v-btn color="primary">Register</v-btn>
              </v-col>
            </v-row>
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
  private user = {
    username: '',
    email: '',
    password: '',
  }
  private confirmPassword = ''
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
