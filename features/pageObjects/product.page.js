class ProductPage {
	itemTwoLevel(searchString) {
        return $(`//dt[text()='${searchString}']/following-sibling::dd/p/a`)
    }

    itemOneLevel(searchString) {
        return $(`//dt[text()='${searchString}']/following-sibling::dd/p`)
    }

    itemData() {
        return $('//a[@href="https://www.fnac.pt/Animal-Farm/a100585#int=:NonApplicable|NonApplicable|NonApplicable|100585|NonApplicable|L1"]');
    }
    
    biographyRef() {
		return $('//a[@href="https://www.fnac.pt/George-Orwell/ia110341"]');
	}

    addBtn() {
        return $('//span[text()="Adicionar ao Cesto"]');
    }
    
    openCartBtn() {
        return $('//a[@class="btn BasketPopin-actionButton"]');
    }

    viewCommentsBtn() {
        const elem = $('//a[@data-automation-id="see-all-customer-reviews-button"]');
        elem.waitForClickable();
        return elem;
    }

    orderCommentsBtn() {
        const elem = $('//button[text()="As mais recentes"]');
        elem.waitForClickable();
        return elem;
    }

    goToLastBtn() {
        const elem = $('//button[text()="2"]');
        elem.waitForClickable();
        return elem;
    }

    checkCommentDate() {
        return $('//div[@class="f-reviews-date"]');
    }

    checkOneStarValue() {
        return $('//li[@class="customerReviewChart__item"]//span[text()="1"]/../../div/span[@class="customerReviewChart__value"]');
    }

    returnItems() {
        return $('//span[@data-automation-id="txt-basketsummary-article-quantity"]');
    }

    getBookPrice() {
        var price = $('//span[@data-automation-id="txt-basketsummary-price-without-shipping-not-discounted"]').getText();
        return price.replace("€",".");
    }

    getShippingCost() {
        var ship = $('//span[@data-automation-id="txt-basketsummary-shippingCost"]').getText();
        return ship.replace("€",".");
    }

    getTotal() {
        var total = $('//span[@data-automation-id="txt-basketsummary-totalPrice"]').getText();
        return total.replace("€",".");
    }
}

module.exports = new ProductPage();