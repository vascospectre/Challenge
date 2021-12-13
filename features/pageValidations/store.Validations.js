const storePage = require('../pageObjects/store.page');

class StorePageValidation {
    validatePostalCode(text) {
        expect(storePage.postalCode().getText()).toContain(text);
    }

    validateSchedule() {
        var counter = 1;
        storePage.schedule().forEach((element) => {
            if(element.getText() === "10:00 - 23:00")
                counter++;         
        });
        expect(counter==7).toBe(true);
    }
}

module.exports = new StorePageValidation();