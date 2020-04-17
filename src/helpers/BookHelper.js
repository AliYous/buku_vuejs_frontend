module.exports = {
    capitalizeBookAttributes(book) {
			book.title = this.capitalizeWords(book.title)
			book.author = this.capitalizeWords(book.author)
    },

    capitalizeWords(string) {
			if (string !== null) {
				return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			}
	},
}
