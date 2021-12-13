class HomePage {
	
	searchBox() {
		const searchElement = $('//input[@id="Fnac_Search"]');
		searchElement.waitForClickable();
		return searchElement;
	}

	searchButton() {
		const searchBtn = $("//*[@type='submit']");
		searchBtn.waitForClickable();
		return searchBtn;
	}

	storesButton() {
		const storesBtn = $('//a[@href="https://www.fnac.pt/localize-loja-fnac/w-4"]');
		return storesBtn;
	}

	storesField() {
		const storeElement = $('//input[@name="city"]'); 
		return storeElement;
	}

	storesSearch() {
		const storeBtnSearch = $("//button[@title='Procurar uma loja']");
		return storeBtnSearch;
	}

	clickNext() {
		const element = $('//a[text()="5"]');
		element.waitForClickable();
		return element;
	}

	changeViewBtn() {
		const element = $('//a[@class="js-mosaicButton mosaicButton"]');
		element.waitForClickable();
		return element
	}
}

module.exports = new HomePage();