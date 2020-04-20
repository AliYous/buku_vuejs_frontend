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
        {{ book.comment }}
      </v-card-text>

      <div class="container upd-status-container">
        <h5>Upd. Status :</h5> 
        <v-card-actions v-for="(status, i) in statusList" :key="i">
          <v-btn
            v-if="status.status !== book.status"
            text
            color="deep-purple accent-4"
            @click="updateBookStatus(book, status.status)"
          >
            {{ status.displayName }}
          </v-btn>
        </v-card-actions>

      </div>
    </v-card>
</template>

<script>
import BookListItemDelete from './BookListItemDelete'
import { mapActions } from 'vuex'


export default {
    name: 'BookListItem',
    props: ['book'],

    data: () => ({
        statusList: [
          {displayName: "Read", status: "read"},
          {displayName: "To read", status: "to_read"},
          {displayName: "In progress", status: "currently_reading"}          
        ]
    }),

    components: {
      BookListItemDelete
    },

    methods: {
      ...mapActions(['updateBook']),

      deleteBook(id) {
        console.log("delete" + id)
      },
      updateBookStatus(book, status) {
        book.status = status
        this.updateBook(book)
      }
    }

}
</script>

<style scoped>
    .book-card {
      margin-bottom: 1.2em;
    }

    hr .split {
        border: 3px solid #EFEEF1;
    }

    .upd-status-container {
      display: flex;
      flex-direction: row;
    }
</style>