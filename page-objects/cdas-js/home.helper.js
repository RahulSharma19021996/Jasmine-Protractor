const { element } = require("protractor");

var cDASHomeHelper = function () {

    var postalCodeTierAssignmentTab = element(by.xpath('(//a[@id="protract-postalCodeTier"])[1]'));
    var postalCodeTierAssignmentHeading = element(by.xpath('//*[contains(text(), "Postal Code  Tier Assignment ")]'));
    var refreshButton = element(by.id('//*[@id="protract-refreshIcon"]'));

    this.get = async () => {
        await browser.get('http://c0023474.test.cloud.com:8080/landingpage/#/');
        console.log('User is navigated to CDAS home page');
    };

    this.postalCodeTierAssignmentTab = async () => {
        await postalCodeTierAssignmentTab.click();
        console.log('Clicked postalCodeTierAssignment Tab');
    };

    this.refreshButtonClick = async () => {
        await refreshButton.click();
        console.log('Clicked refresh button');
    };


    this.postalCodeTierAssignmentHeading = async () => {
        await postalCodeTierAssignmentHeading.getAttribute().
        console.log('Got postalCodeTierAssignmentHeading Text');
    };

};

module.exports = cDASHomeHelper
  






