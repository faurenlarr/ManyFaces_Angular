(function(){

angular
  .module('manyfaces')
  .controller('MainController', function($scope){
    $scope.msg = "YEAHHH";
  })

  .controller('OtherController', function ($scope, FacesService) {

      FacesService.getFaces().success(function (faces) {
        console.log(faces);
        $scope.BestFaces = faces;
      });
      //
      // $scope.BestFaces = [
      //              {
      //                title: "Target Lady",
      //                image: "http://i.imgur.com/6iNpwRS.png",
      //              },
      //              {
      //                title: "Judy",
      //                image: "http://www.nbc.com/sites/nbcunbc/files/files/images/2015/3/01/140228_2750839_The_Lawrence_Welk_Show_anvver_4.jpg",
      //              }
      //  ];

            var clearForm = function(face){
              $scope.newFace.title="";
              $scope.newFace.image="";
            };

           $scope.addFace = function (newFace) {
                  FacesService.createFace(newFace);
                  setTimeout(clearForm,25);

                };


              $scope.removeFace = function(face){
                  FacesService.deleteFaces(face);

              };

  });


})();
