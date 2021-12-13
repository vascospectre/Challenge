const { Given, When, Then } = require('@cucumber/cucumber');
const homePageActions = require('../pageActions/home.Actions');
const searchPageActions = require('../pageActions/search.Actions');
const storePageActions = require('../pageActions/store.Actions');
const productPageActions = require('../pageActions/product.Actions');
const productPageValidations = require('../pageValidations/product.Validations');
const searchPageValidations = require('../pageValidations/search.Validations');
const storePageValidations = require('../pageValidations/store.Validations');

Given(/^I am on the homepage$/, () => {
	homePageActions.openHomePage();
});

When(/^I search by "(.*)"$/, (searchString) => {
	homePageActions.fillSearchBox(searchString);
	homePageActions.clickSearchBtn();
});

When(/^I change the view$/, () => {
	browser.pause(20000);
	homePageActions.clickNext();
});
Then(/^That "(.*)" appear in the results and has "(.*)" in description$/, (searchBook, searchWord) => {
	browser.pause(5000);
	searchPageValidations.validateBookExists(searchBook, searchWord);
});

Then(/^I choose the book "(.*)" in the results$/, (searchString) => {
	searchPageActions.clickProductBtn(searchString);
});

Then(/^I validate that the author is "(.*)"$/, (searchString) => { 
	productPageValidations.validateFieldTwoLevels('Autor', searchString);
});

Then(/^I validate that the ISBN "(.*)"$/, (searchString) => { 
	productPageValidations.validateFieldOneLevel('ISBN', searchString);
});

Then(/^I validate that the number of pages are "(.*)"$/, (searchString) => { 
	productPageValidations.validateFieldOneLevel('Nº Páginas', searchString);
});

Then(/^I validate that the book dimensions are "(.*)"$/, (searchString) => { 
	productPageValidations.validateFieldOneLevel('Dimensões', searchString);
});

Then(/^I validate that the first comment is from "(.*)"$/, (searchString) => {
	browser.pause(2000);
	productPageActions.viewAllComments();
	productPageActions.orderComments();
	productPageActions.goToLastPage();
	browser.pause(5000);
	productPageValidations.checkDate(searchString);
});

Then(/^I validate that theres no classifications with one star$/, () => {
	productPageValidations.checkOneStar();
});

Then(/^I choose the author biography$/, () => {
	productPageActions.clickBiographyBtn();
});

Then(/^I check if "(.*)" is from the author$/, (searchString) => {
	productPageValidations.validateBook(searchString);
});

Then(/^I add the book to the shopping cart$/, () => {
	productPageActions.addToCart();
});

Then(/^I check if the number of items are one$/, () => {
	browser.pause(5000);
	productPageActions.openCart();
	productPageValidations.checkItemsInCart();
});

Then(/^I check if the value is the price of the book plus shipping$/, () => {
	productPageValidations.checkPrice();
});

When(/^I choose the modal and write "(.*)"$/, (searchParameter) => { 
	homePageActions.openStores();
	homePageActions.fillStore(searchParameter);
	homePageActions.clickStores();
});

Then(/^I choose the Almada store$/, () => {
	browser.pause(5000);
	storePageActions.clickStoreBtn();
});

Then(/^I verify if the postal code is "(.*)"$/, (searchString) => { 
	storePageValidations.validatePostalCode(searchString);
});

Then(/^I verify that the store is schedule is from ten to eleven$/, () => {
	browser.pause(5000);
	storePageValidations.validateSchedule();
});