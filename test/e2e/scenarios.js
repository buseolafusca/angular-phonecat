'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

});

describe('PhoneCat App', function(){

	it('should redirect index.html to index.html#/phones', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/phones');
      });
  });

  describe('Phone list view', function() {
    beforeEach(function() {
      browser.get('app/index.html#/phones');
    });
  });
  
  describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });


    it('should display placeholder page with phoneId', function() {
      // This element doesn't exist, so this fails.
      var nonExistant = element(by.binding('phoneId')).getText();
      expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
    });
  
  });

});