define(['app'], function(app) {
    app.register
        .controller('topbarCtrl',
            function($scope, $stateParams) {
                $scope.userInfo = {
                    userName: '73942809011@qq.com'
                };
                $scope.userDetail = false;
                $scope.toggle = function() {
                    $scope.userDetail = !$scope.userDetail;
                }
            })
})
