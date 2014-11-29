describe("Book Management Controller Unit testing", function () {
  var controller, mockScope;

  // Set up the module
  beforeEach(angular.mock.module('bookspot'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    mockScope = $rootScope.$new();
    controller = $controller("bookmgr", {
      $scope: mockScope
    });
  }));

  it('call listBooks() should return 5 books', function() {
    mockScope.listBooks();

    expect(mockScope.books.length).toEqual(5);
    for(var i=0; i<5; i++) {
      expect(mockScope.books[i]["name"]).toEqual("Book" + (i + 1));
    }
  });
});
