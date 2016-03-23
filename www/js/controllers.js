angular.module('starter.controllers', ['uiSlider'])

  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.positions = {
      minAge: 20,
      maxAge: 80,
      minHeight : 10,
      maxHeight : 40,
      minDist : 0,
      maxDist : 40
    };
    var textnode = document.createElement("div");
    textnode.id =  "minAgeP";
    textnode.innerHTML="<p style='margin-top: -30px'>"+ $scope.positions.minAge +"</p>";

    var minage = document.getElementById("pointer1");
    minage.appendChild(textnode);
    $scope.$watch('positions.minAge',function(newValue,oldValue){
      textnode.innerHTML="<p style='margin-top: -24px;margin-left: 3px;'>"+ newValue +"</p>";
    });
    var textnode1 = document.createElement("div");
    textnode1.id =  "maxAgeP";
    textnode1.innerHTML="<p style='margin-top: -30px'>"+ $scope.positions.maxAge +"</p>";

    var maxage = document.getElementById("pointer2");
    maxage.appendChild(textnode1);
    $scope.$watch('positions.maxAge',function(newValue,oldValue){
      textnode1.innerHTML="<p style='margin-top: -24px;margin-left: 3px;'>"+ newValue +"</p>";
    })
  })

  .controller('ethnicityCtrl', function($scope) {

  });
