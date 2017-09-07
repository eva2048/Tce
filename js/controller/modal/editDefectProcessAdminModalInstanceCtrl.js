//加入项目
define(['app'], function(app) {
    app.register
        .controller('editDefectProcessAdminModalInstanceCtrl', ['$scope', '$modalInstance', '$log',
            function($scope, $modalInstance, items) {
                $scope.items = items;
                $scope.selected = {
                    item: $scope.items[0]
                };
                $scope.ok = function() {
                    $modalInstance.close($scope.selected);
                    console.log($scope.size);
                };
                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
            }
        ])
})
