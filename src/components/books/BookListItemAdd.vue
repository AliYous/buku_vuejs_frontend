<template>
		<div class="add-book">
            <v-btn
              fab
              color="cyan accent-2"
              bottom
              left
              absolute
              @click="dialog = !dialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
		</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name :'BookListItemAdd',
	methods: {
		...mapActions(['addBook'])
	}
}
</script>

<style>
	.add-book {
	position:relative; 
	top: 0;
	}
</style>