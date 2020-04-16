<template>
  <nav class="header">
    <v-toolbar app flat>
      <img class="mr-3 logo" :src="require('@/assets/buku-logo.png')" height="500"/>
      <a v-if="userLoggedIn" role="button" @click.prevent="signOut">Sign out</a>
    </v-toolbar>
  </nav>
</template>

<script>
import firebase from 'firebase';

export default {
    name: "TheHeader",
    data() {
      return {
        userLoggedIn: false,
      }
    },
    created() {
      // Check if user is logged in
      firebase.auth().onAuthStateChanged(user =>  {
        if (user) {
          console.log("current user")
          this.userLoggedIn = true
        } else {
          console.log("No current user " + user )
        }
      })
    },

    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.userLoggedIn = false
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