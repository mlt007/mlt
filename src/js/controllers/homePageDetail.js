/**
 * Created by lx on 2016/12/29.
 */
angular.module('myApp.homePageDetail',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('homePageDetail',{
        url:'/homePageDetail',
        templateUrl:'homePageDetail.html',
        controller:'homePageDetailController'
    });
}]).controller('homePageDetailController',['$scope','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicViewSwitcher,HttpFactory) {
    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection("back");
    };

    var url = 'http://114.112.94.166/sunny/wap/api/getGoods';
    HttpFactory.getData(url).then(function (result) {
        $scope.detas = result.goodsData[0];
        console.log($scope.detas);
    });
}]);