define(['app'], function(app) {
    app.register
        .controller('userDetailAdminCtrl',
            function($scope, $stateParams) {
                //日期控件1
                $scope.dat = new Date();
                $scope.dat0 = new Date();
                $scope.format = "yyyy/MM/dd";
                $scope.altInputFormats = ['yyyy/M!/d!'];
                $scope.popup1 = {
                    opened: false
                };
                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                $scope.isAttribute = true;
            })
})
