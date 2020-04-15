<template>
  <nav class="header">
    <!-- <v-app-bar
      color="#FFFFFF"
      dense
    >
      <h1 class="toolbar-title"> BUKU </h1>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar> -->

     <!-- <v-navigation-drawer
        v-model="drawer"
        :color="`#8B69EB`"
        :mini-variant="true"
        fixed
        clipped
        dark
      >
      <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item>
            <v-list-item-avatar class="avatar">
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer> -->


    <v-toolbar app flat>
      <img class="mr-3 logo" :src="require('@/assets/buku-logo.png')" height="500"/>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
      return {
        drawer: true
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