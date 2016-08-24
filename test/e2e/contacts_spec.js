/*global browser, by */

describe('E2E: Contacts', function() {
  var url = '.sidebar a[href="/contacts"]';
  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
    element(by.css(url)).click();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/contacts');
  });

  it('should show the h1', function() {
    var element = browser.findElement(by.tagName('h1'));
    expect(element.getText()).toEqual('Contact List');
  });

  it('should title show correctly', function() {
    expect(browser.getTitle()).toEqual('Contact List — Contacts Book');
  });

});
