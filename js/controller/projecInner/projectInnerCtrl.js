define(['app'], function(app) {
    app.register
        .controller('projectInnerCtrl',
            function($scope, $stateParams) {
                $scope.isFadeIn = false;
                $scope.fadeIn = function() {
                    $scope.isFadeIn = true;
                }
                $scope.fadeOut = function() {
                    $scope.isFadeIn = false;
                }
            })
})
