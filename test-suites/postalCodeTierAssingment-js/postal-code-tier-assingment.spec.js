const { WebDriver, browser, by } = require('protractor');
var CDASHomePage = require('../../page-objects/cdas-js/home.helper.js');
var EC = protractor.ExpectedConditions;

describe('CDAS Website Test: ', function () {
	var cdasHomePage = new CDASHomePage();
	beforeEach(function () {
		cdasHomePage.get();
	});

	it('As a user, I should be able click Postal code Tier Assignment', async () => {
		await cdasHomePage.postalCodeTierAssignmentTab();

		//await browser.sleep(2000);

		//await browser.wait(EC.stalenessOf(element(by.xpath("//*[@class='loader']")), 20000));

		console.log("First");
		console.log("Second");
		console.log("Third");
		console.log("Fourth");
		console.log("Fifth");
		console.log("Fifth");
		console.log("Fifth");
		console.log("Fifth");

		await browser.findElement(by.id('//*[@id="protract-refreshIcon"]/')).click();

		//await browser.executeScript('arguments[0].scrollIntoView()', cdasHomePage.postalCodeTierAssignmentHeading());
		
		//await cdasHomePage.refreshButtonClick();
	});
});