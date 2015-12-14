'use strict';

describe('Controller: ChildCtrl', function () {

  // load the controller's module
  beforeEach(module('magosApp'));

  var ChildCtrl,
    routeParams,
    childrenSrv,
    scope;
  var childValue,
    presentsValue,
    childId,
    scopeName,
    scopeDescription;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    childValue = { id: 1, name: 'Zipi Zapatilla' };
    presentsValue = [
      { name: 'Bicicleta', description: 'Pero no la va a conseguir' },
      { name: 'Calabazas', description: 'Pero no las de la huerta' },
    ];
    scopeName = 'nombre';
    scopeDescription = 'descripcion';
    childId = 3324;

    scope = $rootScope.$new();
    scope.name = scopeName;
    scope.description = scopeDescription;
    routeParams = { childId: childId };
    childrenSrv = {
      getChild : jasmine.createSpy().and.returnValue(childValue),
      getPresents: jasmine.createSpy().and.returnValue(presentsValue),
      addPresent: jasmine.createSpy(),
    };

    ChildCtrl = $controller('ChildCtrl', {
      $scope: scope,
      $routeParams: routeParams,
      ChildrenSrv: childrenSrv
    });
  }));

  it('should make the proper calls to the server', function () {
    expect(childrenSrv.getChild).toHaveBeenCalledWith(childId);
    expect(childrenSrv.getPresents).toHaveBeenCalledWith(childId);
  });

  it('should set the returned values in the scope', function () {
    expect(scope.child).toEqual(childValue);
    expect(scope.presents).toEqual(presentsValue);
  });

  it('should retrieve the new present information from the scope', function() {
    scope.create();
    expect(childrenSrv.addPresent).toHaveBeenCalledWith(childId, scopeName, scopeDescription);
  });
});
