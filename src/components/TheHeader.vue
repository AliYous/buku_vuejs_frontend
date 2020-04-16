<template>
  <nav class="header">
    <v-toolbar app flat>
      <img class="mr-3 logo" :src="require('@/assets/buku-logo.png')" height="500"/>
      <a role="button" @click.prevent="signOut">Sign out</a>
    </v-toolbar>
  </nav>
</template>

<script>
import firebase from 'firebase';

export default {
    name: "TheHeader",
    data() {
      return {
        drawer: true
      }
    },
    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({
              name: "Auth",
              params: {userExistsProps: true}
            });
          });
      }
    }
}
</script>

<style>
  /* .header {
    margin-bottom: 3rem;
  }
  .avatar {
    padding-right: 15px;
  } */
  .logo {
    margin-top: 6em;
    margin-left: -3em;
  }
</style>