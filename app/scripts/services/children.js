'use strict';

/**
 * @ngdoc function
 * @name magosApp.service:ChildrenSrv
 * @description
 * # ChildrenSrv
 * Service for the data related to children
 */
angular.module('magosApp')
  .factory('ChildrenSrv', [function() {
    var data = [];
    data[1] = {
      child: {
        name: 'Carolina',
        id: 1,
      },
      presents:
      [
        {
          name: 'Lucas',
          url: 'http://www.amazon.es/gp/product/B00IARP3UM?keywords=lucas&qid=1449682522&ref_=sr_1_1&sr=8-1',
          img: 'http://ecx.images-amazon.com/images/I/51q5Tk-EPlL._SL1024_.jpg',
          description: 'Lucas, el amigo de Nancy',
          price: 21.48,
        },
        {
          name: 'Estuche Descendientes',
          description: 'Un estuche de la nueva pelicula de Disney, los Descendientes',
        }
      ],
    };
    data[2] = {
      child: {
        name: 'Diego',
        id: 2,
      },
      presents:
      [
        {
          name: 'Coches Hot Wheels',
          description: 'Unos que molen, si son de Off-road, mejor',
          img: 'http://ecx.images-amazon.com/images/I/71nik7YCzsL._SL1500_.jpg',
        },
        {
          name: 'Tren de madera BRIO',
          description: 'Tren a pilas para las vias de madera, compatible con las de ikea',
          url: 'http://www.amazon.es/BRIO-Tren-juguete-color-33592/dp/B00AOVSLOC/ref=sr_1_1',
          img: 'http://ecx.images-amazon.com/images/I/81zvfKJu-gL._SL1500_.jpg',
          price: 20.99,
        },
        {
          name: 'Playmobil Comisaría de Policía',
          url: 'http://www.amazon.es/Playmobil-City-Action-Comisar%C3%ADa-polic%C3%ADa/dp/B007RDZFPI/ref=sr_1_sc_2',
          img: 'http://ecx.images-amazon.com/images/I/61fxnyowgFL.jpg',
          description: 'La comisaría de policía de los clicks',
          price: 72.00,
        },
        {
          name: 'Disfraz capitan america',
          url: 'http://www.amazon.es/Rubies-Capit%C3%A1n-Am%C3%A9rica-disfraz-610424-M/dp/B00S7L5RW0/ref=sr_1_1',
          description: 'Un disfraz del Capi, porque el Capi es el jefe',
          img: 'http://ecx.images-amazon.com/images/I/418w5tixc2L.jpg',
          price: 29.99,
        },
      ],
    };

    return {
      getPresents: function (id) {
        return data[id].presents;
      },
      getChild: function (id) {
        return data[id].child;
      },
      addPresent: function (childId, name, description) {
        data[childId].presents.push({
          name: name,
          description: description,
        });
      }
     };
  }]);
