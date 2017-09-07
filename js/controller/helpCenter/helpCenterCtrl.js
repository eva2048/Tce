define(['app'], function(app) {
    app.register
        .controller('helpCenterCtrl',
            function($scope, $stateParams) {           	
                $scope.helpCenterNavNow = $stateParams.hnum1;  
                $scope.helpCenterNavNow1 = $stateParams.hnum2; 
                $scope.helpCenterNavNow2 = $stateParams.hnum3; 
                $scope.navshow=true;             
                $scope.toggle=function(){
           			$scope.navshow=!$scope.navshow;
           		}                            
            })
})

