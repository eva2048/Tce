//加入项目
define(['app'], function(app) {
    app.register
        .controller('bugProjectModalInstanceCtrl', ['$scope', '$modalInstance', '$log',
            function($scope, $modalInstance) {
                $scope.ok = function() {
                    $modalInstance.close($scope.selected);
                    console.log($scope.size);
                };
                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
                $scope.price=80;
                $scope.num=0;
                $scope.$watch("num", function() {                   
                    if($scope.num < 0) {
                        $scope.num = 0;                                             
                    }
                    $scope.all = $scope.num * $scope.price;
                }, true);
                $scope.increase = function() {
                    $scope.num++;
                };
                $scope.decrease = function() {
                    $scope.num--;
                };
            }
        ])
})
