(function(){
"use strict";
angular.
  module('manyfaces')
  .factory('FacesService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/KWIIG';

      var addFace = function (newFace) {
             $http.post(url, newFace).then(function (res) {
               console.log(res);
             });
          };

                var getFaces = function () {
                  return $http.get(url);
                };

                var removeFace = function(faces){
                  $http.delete(url+'/'+faces._id);
                };

                return {
                  createFace: addFace,
                  getFaces: getFaces,
                  deleteFaces: removeFace
                };


  });




})();
