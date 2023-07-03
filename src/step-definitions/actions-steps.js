const { Given, When } = require('@wdio/cucumber-framework');
const { pages } = require('../po');

When('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

When('I click {string} link from the side menu', function(link) {
    return pages('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function() {
    return pages('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function(button) {
    return pages('doctors').addDoctorModal.clickButton(button);
});

When('I wait {int} seconds', function(timeToWaitInSeconds) {
    return browser.pause(timeToWaitInSeconds * 1000);
});

When('I fill in {string} Doctor name in the modal window', function(name) {
    return pages('doctors').addDoctorModal.input('name').setValue(name);
});

When('I fill in {string} Doctor mobile number', function(phone) {
    return pages('doctors').addDoctorModal.input('phone').setValue(phone);
});

When('I enter {string} Doctor email', function(email) {
    return pages('doctors').addDoctorModal.input('email').setValue(email);
});

When('I enter {string} Doctor education', function(education) {
    return pages('doctors').addDoctorModal.input('education').setValue(education);
});

When('I enter {string} Doctor designation', function(designation) {
    return pages('doctors').addDoctorModal.input('designation').setValue(designation);
});
