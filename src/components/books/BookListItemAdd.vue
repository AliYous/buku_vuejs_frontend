<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">

      <template v-slot:activator="{ on }">
				<div class="add-book">
            <v-btn
              fab
              color="cyan accent-2"
              bottom
              left
              absolute
							dark v-on="on"
						>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
				</div>		
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Add Book to list: {{ bookListStatus[0] }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="book.title" label="Book title*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="book.author" label="Written By ... (Author)"></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-textarea
                  v-model="book.comment"
                  placeholder="e.g. This book was recommended to me by Erin, it talks about beating the little voice ...." 
                  auto-grow
                  filled
                  color="deep-purple"
                  label="Comment"
                  rows="3"
                ></v-textarea>
              </v-col>

							<v-col cols="12">
								<v-checkbox
									v-model="book.purchased"
									:label="`I already bought this book`"
								></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addBook(book); book = resetBook; dialog = false;">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name:'BookListItemAdd',
	props: ['bookListStatus'],
	data () {
		return {
			book: {
				title: '',
				author: '',
        comment: '',
				status: this.bookListStatus[1], // index 1 to actually get the db attr name of the status, not the display name
				purchased: false,
      },
      resetBook: {
        title: '',
        author: '',
        comment: '',
        status: this.bookListStatus[1], // index 1 to actually get the db attr name of the status, not the display name
        purchased: false,
			},
			dialog: false,
		}
	},
	methods: {
		...mapActions(['addBook']),
	}
}
</script>

<style>
	.add-book {
	position:relative; 
	top: 0;
	}
</style>