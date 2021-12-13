const productPage = require('../pageObjects/product.page');

class ProductPageValidation {
	validateFieldTwoLevels(field, text) {
		expect(productPage.itemTwoLevel(field).getText()).toBe(text);
	}

	validateFieldOneLevel(field, text) {
		expect(productPage.itemOneLevel(field).getText()).toBe(text);
	}

	validateBook(field) {
		expect(productPage.itemData(field).getText()).toContain("Animal Farm");
	}

	checkDate(searchString) {
		var elem = productPage.checkCommentDate().getText();
		var commentDate = elem.substring(elem.length - 11);
		
		const strToArr = commentDate.split(' ');
		const allFirstToUC = strToArr.map(word => word[0].toUpperCase() + word.substring(1));
		commentDate = allFirstToUC.join(' ');
		expect(commentDate===searchString).toBe(true);	
	}

	checkOneStar() {
		expect(productPage.checkOneStarValue().getText()).toBe("0");
	}

	checkItemsInCart() {
		expect(productPage.returnItems().getText()).toBe("(1)");
	}

	checkPrice() {
		const bookPrice = productPage.getBookPrice();
		const shippingCost = productPage.getShippingCost();
		var total = parseFloat(productPage.getTotal()).toFixed(2);
		var sum = (parseFloat(bookPrice) + parseFloat(shippingCost)).toFixed(2);
		expect(total===sum).toBe(true);
	}
}

module.exports = new ProductPageValidation();