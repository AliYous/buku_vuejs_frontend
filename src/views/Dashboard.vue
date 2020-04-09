<template>
    <div>
        <div class="container-fluid"> 
            <BookList />
            <BookList />
            <BookList />
        </div>
    </div>
</template>

<script>
import BookList from '../components/books/BookList'
export default {
    name: 'Dashboard',
    components: {
        BookList
    }

}
</script>

<style>
    .container-fluid {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
    }
</style>