<template>
    <div>
        <div class="container-fluid"> 
                <BookList v-bind:status="statusList[0]" v-bind:books="bookList"/>
                <BookList v-bind:status="statusList[1]"/>
                <BookList v-bind:status="statusList[2]"/>
        </div>
    </div>
</template>

<script>
import BookList from '../components/books/BookList'
import { mapActions } from 'vuex'


export default {
    name: 'Dashboard',
    components: {
        BookList
    },
    data() {
        return {
        statusList: ["In Progress", "To Read", "Read"],
        bookList: {},
        readBooks: {},
        }
    },
    created() {
        this.bookList = this.getAllBooks()
    },

    methods: {
        ...mapActions({
            fetchBooks: 'fetchBooks'
        }),

        getAllBooks() {
            this.fetchBooks()
        }
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
