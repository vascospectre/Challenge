const searchPage = require('../pageObjects/search.page');

class SearchPageValidation {
	validateBookExists(searchString) {
		searchPage.searchBook().forEach((element) => {
            expect(element.getText()).toBe(searchString)
        });
    }

    validateDescription(searchString) {
        expect(searchPage.returnInDescription().getText()).toContain(searchString);
    }
}

module.exports = new SearchPageValidation();