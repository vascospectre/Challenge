const productPage = require('../pageObjects/product.page');

class ProductPageActions {
	clickBiographyBtn() {
		productPage.biographyRef().click();
	}

    addToCart() {
        productPage.addBtn().click();
    }

    openCart() {
        productPage.openCartBtn().click();
    }

    viewAllComments() {
        productPage.viewCommentsBtn().click();
    }

    orderComments() {
        productPage.orderCommentsBtn().click();
    }

    goToLastPage() {
        productPage.goToLastBtn().click();
    }

}

module.exports = new ProductPageActions();