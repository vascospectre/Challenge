const storePage = require('../pageObjects/store.page');

class StorePageActions {
	clickStoreBtn() {
		storePage.storeID().click();
	}
}

module.exports = new StorePageActions();