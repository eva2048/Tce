define(['app'], function(app) {
    app.register
        .controller('projectBugManageCtrl',
            function($scope, $stateParams) {
                $scope.index = 1;
                $scope.isShowAdvancedFilterPack = false;
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
                //日期控件2
                $scope.dat1 = ''
                $scope.format1 = "yyyy/MM/dd";
                $scope.altInputFormats1 = ['yyyy/M!/d!'];
                $scope.popup2 = {
                    opened: false
                };
                $scope.open2 = function() {
                    $scope.popup2.opened = true;
                };
            })
})
