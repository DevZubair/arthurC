angular.module('starter.controllers', ['uiSlider','uiSliders'])

  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {

  })
  .controller('AccountCtrl', function($scope) {
    $scope.positions = {
      minAge: 20,
      maxAge: 80,
      minHeight : 0,
      maxHeight : 9,
      minDist : 0,
      maxDist : 40
    };
   var textnode = document.getElementById('minAgeP');
    $scope.$watch('positions.minAge',function(newValue,oldValue){
      textnode.innerHTML = newValue;
    });
    var textnode1 = document.getElementById('maxAgeP');
    $scope.$watch('positions.maxAge',function(newValue,oldValue){
      textnode1.innerHTML=newValue;
    });
    var textnode2 = document.getElementById('minHeightP');
    $scope.$watch('positions.minHeight',function(newValue,oldValue){
      textnode2.innerHTML = newValue;
    });
    var textnode3 = document.getElementById('maxHeightP');
    $scope.$watch('positions.maxHeight',function(newValue,oldValue){
      textnode3.innerHTML=newValue;
    });

    $scope.data = { 'volume' : '50' };

  })

  .controller('ethnicityCtrl', function($scope) {

  })
  .controller('settingCtrl', function($scope) {

  })
  .controller('chatHeartCtrl', function($scope) {

  });
