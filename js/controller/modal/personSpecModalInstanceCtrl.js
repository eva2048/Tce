//加入项目
define(['app'], function(app) {
    app.register
        .controller('personSpecModalInstanceCtrl', ['$scope', '$modalInstance', '$log',
            function($scope, $modalInstance) {
                $scope.as="0";
                $scope.change=function(personState){
                    if(personState=="0"){
                        $scope.as="0"
                    }else if(personState=="1"){
                        $scope.as="200"
                    }else if(personState=="2"){
                        $scope.as="300"
                    }else{
                        $scope.as="400"
                    }
                }
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
