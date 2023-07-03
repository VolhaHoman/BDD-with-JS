const {Then} = require('@wdio/cucumber-framework');
const { pages } = require("../po")
const compareText = require("./utils/compare-text");

Then('Page title should {string} {string}', async function(shouldBeParameter, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParameter);
});

Then(/^modal window should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('doctors').addDoctorModal.rootElement);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
});

Then(/^card with a new doctor should( not)? be displayed on the page$/, async (notArg) => {
    let assert = expect(pages('doctors').specialistCard(8).name);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toHaveText('Dr. Doctor Dre');
});