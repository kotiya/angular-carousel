'use strict';

describe('Controller: DemoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCarouselApp'));

  var DemoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemoctrlCtrl = $controller('DemoctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
