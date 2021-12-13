class StorePage {
	storeID() {
        const elem = $('//ul[@class="js-StoreFinder-closeStores opened"]//a[text()="Almada"]');
        elem.scrollIntoView({block: "center", behavior: "smooth"});
        return elem;
	}

    postalCode(searchString) {
        return $('//div[@class="adresse"]');
    }

    schedule() {
        return $$('//div[@class="mrg_t_lg"]/p/span');
    }
}

module.exports = new StorePage();