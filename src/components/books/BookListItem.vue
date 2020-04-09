<template>
  <v-card
    width="26em"
    class="mx-auto book-card"
    raised
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">The War Of Art</v-list-item-title>
        <v-list-item-subtitle>by Steven Pressfield</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <hr class="split">

    <v-card-text>
      Recommended by Harry JMG, resistance
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'BookListItem'

}
</script>

<style>
    .book-card {
      border-radius: 3em;
      color: red;
    }

    hr .split {
        border: 3px solid #EFEEF1;
    }
</style>