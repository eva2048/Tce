//加入项目
define(['app'], function(app) {
    app.register
        .controller('usecaseExportModalInstanceCtrl', ['$scope', '$modalInstance', '$log',
            function($scope, $modalInstance, items) {
                $scope.items = items;
                $scope.selected = {
                    item: $scope.items[0]
                };
                $scope.data = [{
                    'id': 1,
                    'level': -1,
                    'title': '用例1',
                    'nodes': [{
                        'id': 11,
                        'level': 0,
                        'title': '用例1.1',
                        'nodes': [{
                            'id': 111,
                            'level': 1,
                            'title': '用例1.1.1',
                            'nodes': []
                        }]
                    }, {
                        'id': 12,
                        'level': 0,
                        'title': '用例1.2',
                        'nodes': []
                    }]
                }];
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
