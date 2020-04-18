<template>
  <nav class="header">
    <v-toolbar app flat>
      <div class="logo">
        <img class="mr-3" :src="require('@/assets/buku-logo.png')" max-height="500"/>
      </div>
      <a v-if="userLoggedIn" role="button" class="signOut-btn" @click.prevent="signOut">Sign out</a>
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
  .header {
    margin-bottom: 3em;
  }
  .avatar {
    padding-right: 15px;
  } 
  .logo {
    position: absolute;
    left: -5em;
  }
  .signOut-btn {
    position: absolute;
    left: 90%;
    margin-top: 0.6em;
  }
</style>