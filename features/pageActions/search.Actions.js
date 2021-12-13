const searchPage = require('../pageObjects/search.page');

class SearchPageActions {
	clickProductBtn(searchString) {
		searchPage.productID(searchString).click();
	}
}

module.exports = new SearchPageActions();