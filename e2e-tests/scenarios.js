'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /books when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/books");
  });


  describe('books', function() {

    beforeEach(function() {
      browser.get('index.html#/books');
    });


    it('should render books when user navigates to /books', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for books/);
    });

  });


  describe('authors', function() {

    beforeEach(function() {
      browser.get('index.html#/authors');
    });


    it('should render authors when user navigates to /authors', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for authors/);
    });

  });
});
