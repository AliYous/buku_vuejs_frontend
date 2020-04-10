<template>
  <div data-app>
    <v-icon @click="dialog = true" >mdi-trash-can-outline</v-icon>

			<v-dialog
					v-model="dialog"
					max-width="320"
				>
				<v-card>
					<v-card-title class="headline">Delete '{{ book.title }}'?</v-card-title>

					<v-card-text>
						Are you sure you want to delete this book ?
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn
						color="green darken-1"
						text
						@click="dialog = false"
						>
						Cancel
						</v-btn>

						<v-btn
						color="green darken-1"
						text
						@click="deleteBook(book); dialog = false"
						>
						Yes
						</v-btn>
					</v-card-actions>
				</v-card>
    </v-dialog>
  </div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'BookListItemDelete',
		props: ['book'],
		data () {
      return {
        dialog: false,
      }
    },
		methods: {
		...mapActions(['deleteBook'])	
		} 
	}

</script>

<style>
	.del {
			background:#ff0000;
			color: #fff;
			border: none;
			padding: 5px 9px;
			border-radius: 50%;
			cursor: pointer;
			float: right;
	}
</style>