class SearchPage {
	productID(searchString) {
		return $(`//a[text()='${searchString}']`);
	}

	searchBook() {
		return $$('//span[@class="thumbnail-title"]/a');
	}

	returnInDescription() {
		return $('//p[@class="summary"]');
	}
}

module.exports = new SearchPage();