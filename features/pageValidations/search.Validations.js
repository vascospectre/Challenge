const searchPage = require('../pageObjects/search.page');

class SearchPageValidation {
	validateBookExists(searchString, searchWord) {
		searchPage.searchBook().forEach((element) => {
            expect(element.getText()).toBe(searchString)
            expect(element.returnInDescription().getText()).toContain(searchWord);
        });
    }
}

module.exports = new SearchPageValidation();