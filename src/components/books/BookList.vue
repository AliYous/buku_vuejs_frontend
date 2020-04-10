<template>
      <div class="flex-rectangle">
        <BookListItemAdd v-bind:bookListStatus="status" />
        <div class="book-status">
          <h1 class="book-status-text" >{{ status[0] }}</h1>
        </div>

        <div class="book-list">
          <div class="book-list">
            <div class="book-item" v-for="book in books" :key="book.id" >
                <BookListItem v-bind:book="book"/>
            </div>
          </div>
        </div>          
      </div>
</template>

<script>
import BookListItem from './BookListItem'
import BookListItemAdd from './BookListItemAdd'

export default {
  name: 'BookList',
  components: {
    BookListItem,
    BookListItemAdd
  },
  props: ["status", "books"] 
}
</script>

<style>

  .flex-rectangle{
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-direction: row;
      width: 21%;
      height: 700px;
      background: #F4F0FA;
      border-radius: 3%;
  }
  .flex-rectangle:before{
      content: "";
      display: block;
      padding-top: 25%;
  }

  .book-item {
    margin-top: 1rem;
  }

  .book-status {
    margin-top: 2em;
    position:absolute;
    text-align:center;
  }
  .book-status-text {
    color: #8B69EB;
  }

  .book-list {
    margin-top: 3em;
  }

</style>