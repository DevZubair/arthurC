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
      minAge: 40,
      maxAge: 60
    };
    var textnode = document.createElement("div");
    textnode.id =  "minAgeP";
    textnode.innerHTML="<p ng-model='positions.minAge'></p>";

    var abc = document.getElementById("pointer1");
    abc.appendChild(textnode);

  })

  .controller('ethnicityCtrl', function($scope) {

  });
