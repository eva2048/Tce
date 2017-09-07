define(['app'], function(app) {
    app.register
        .controller('customDefectProcessCtrl',
            function($scope) {
                $scope.totalNum = '5';
                $scope.atNum = '2';
                $scope.tcNum = '3';
            })
})
