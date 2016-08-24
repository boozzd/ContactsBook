/*global browser, by */

describe('E2E: Dashdoard', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the h1', function() {
    var element = browser.findElement(by.tagName('h1'));
    expect(element.getText()).toEqual('Dashboard');
  });

});
