define(['app'], function(app) {
    app.register
        .controller('personalProjectDocumentCtrl',
            function($scope, $stateParams) {
                $scope.maxSize = 3;
                $scope.totalItems = 200;
                $scope.currentPage = 1;
                $scope.numPages = 3;
            })
})
