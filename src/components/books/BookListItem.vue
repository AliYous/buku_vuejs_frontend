<template>
  <v-card
    width="26em"
    class="mx-auto book-card"
    raised
  >
    <v-list-item>
      <BookListItemDelete v-bind:book="book" />
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ book.title }}</v-list-item-title>
        <v-list-item-subtitle>by {{ book.author }}</v-list-item-subtitle>
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
import BookListItemDelete from './BookListItemDelete'

export default {
    name: 'BookListItem',
    props: ['book'],
    components: {
      BookListItemDelete
    },

    methods: {
      deleteBook(id) {
        console.log("delete" + id)
      }
    }

}
</script>

<style>
    .book-card {
      color: red;
      margin-bottom: 1.2em;
    }

    hr .split {
        border: 3px solid #EFEEF1;
    }
</style>