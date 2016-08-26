/*global browser, by */

describe('E2E: Contacts', function() {
  var url = '.sidebar a[href="/contacts"]';
  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
    element(by.css(url)).click();
  });

});
