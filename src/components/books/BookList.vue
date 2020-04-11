<template>
      <div class="flex-rectangle">
        <!-- <BookListItemAdd v-bind:bookListStatus="status" /> -->
        <div class="book-status">
          <h1 class="book-status-text" >{{ status[0] }}</h1>
        </div>

        <div class="book-list">
          <div class="book-scroll">
          <vuescroll>       
              <div class="book-item" v-for="book in books" :key="book.id" >
                  <BookListItem v-bind:book="book"/>
              </div>
          </vuescroll>
          </div>
        </div>          
      </div>
</template>

<script>
import BookListItem from './BookListItem'
// import BookListItemAdd from './BookListItemAdd'
import vuescroll from 'vuescroll';


export default {
  name: 'BookList',
  components: {
    BookListItem,
    // BookListItemAdd
    vuescroll
  },
  props: ["status", "books"] 
}
</script>

<style>

  .flex-rectangle{
      display: flex;
      justify-content: space-around;
      width: 21%;
      height: 52em;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 45em;
    width: 26%;
    margin-top: 6em;
  }

  .book-scroll {
    height: 45em;
  }
</style>