define(['app'], function(app) {
    app.register
        .controller('projectInnerNavCtrl',
            function($scope, $stateParams) {
                $scope.projectstate = '进行中';
                $scope.getSrc = function(state) {
                    if (state == '进行中') {
                        return 'images/icon_jingxz.png';
                    } else if (state == '已结项') {
                        return 'images/icon_yijx.png';
                    } else {
                        return 'images/icon_jiexz.png';
                    }
                };
                $scope.projectInnerNavNow = $stateParams.num2;
            })
})
