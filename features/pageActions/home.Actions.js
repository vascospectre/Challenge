const homePage = require('../pageObjects/home.page');

class HomePageActions {
	openHomePage() {
		browser.maximizeWindow();
		browser.url('https://www.fnac.pt/');
	}

	fillSearchBox(searchString) {
		homePage.searchBox().addValue(searchString);
	}

	clickSearchBtn() {
		homePage.searchButton().click();
	}

	openStores() {
		homePage.storesButton().click();
	}

	fillStore(searchString) {
		homePage.storesField().addValue(searchString);
	}

	clickStores() {
		homePage.storesSearch().click();
	}

	clickNext() {
		homePage.clickNext().click();
	}

	changeView() {
		homePage.changeViewBtn().click();
	}
}

module.exports = new HomePageActions();
