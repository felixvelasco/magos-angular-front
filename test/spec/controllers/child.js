'use strict';

describe('Controller: ChildCtrl', function () {

  // load the controller's module
  beforeEach(module('magosApp'));

  var ChildCtrl,
    routeParams,
    childrenSrv,
    scope;
  var childValue,
    presentsValue;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    childValue = { id: 1, name: 'Zipi Zapatilla' };
    presentsValue = [
      { name: 'Bicicleta', description: 'Pero no la va a conseguir' },
      { name: 'Calabazas', description: 'Pero no las de la huerta' },
    ];

    scope = $rootScope.$new();
    routeParams = { childId: 1 };
    childrenSrv = {
      getChild : jasmine.createSpy().and.returnValue(childValue),
      getPresents: jasmine.createSpy().and.returnValue(presentsValue),
    };

    ChildCtrl = $controller('ChildCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      ChildrenSrv: childrenSrv
    });
  }));

  it('should make the proper calls to the server', function () {
    expect(childrenSrv.getChild).toHaveBeenCalledWith(1);
    expect(childrenSrv.getPresents).toHaveBeenCalledWith(1);
  });

  it('should set the returned values in the scope', function () {
    expect(scope.child).toEqual(childValue);
    expect(scope.presents).toEqual(presentsValue);
  });
});
