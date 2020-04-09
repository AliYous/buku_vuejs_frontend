<template>
      <div class="flex-rectangle">
      
        <div class="book-item">
            <BookListItem />
        </div>
          
      </div>
</template>

<script>
import BookListItem from './BookListItem'

export default {
  name: 'BookList',
  components: {
    BookListItem
  }
}
</script>

<style>

 .flex-rectangle{
    display: flex;
    justify-content: space-around;
    align-content: center;
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


</style>