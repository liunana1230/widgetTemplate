define(['angular'], function(angular) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return function($scope, $http, $interval, myFactory) {
        $scope.searchValue = myFactory.searchValue;
        $scope.info = 'module2 cal';
        
        var i = 10000;
        //anfular修改了原来的setTimeout和setInterval，必须引入$timeout和$interval，否则无法修改angular范围内的东西
        $interval(function() {
            i--;
            $scope.info = i;
        }, 1000);
        
        $scope.$on('searchValueUpdate', function() {
            $scope.$watch(myFactory.searchValue, function() {
                $scope.searchValue = myFactory.searchValue;
            });
        });
    }
});