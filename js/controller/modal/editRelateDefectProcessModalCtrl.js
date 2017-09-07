//加入项目
define(['app'], function(app) {
    app.register
        .controller('editRelateDefectProcessModalCtrl', ['$rootScope', '$scope', '$modal', '$log',
            function($rootScope, $scope, $modal, $log) {
                $scope.items = ['item1', 'item2', 'item3'];
                $scope.open = function() {
                    var modalInstance = $modal.open({
                        templateUrl: 'tpls/modal/editRelateDefectProcess.html',
                        controller: 'editRelateDefectProcessModalInstanceCtrl',
                        resolve: {
                            items: function() {
                                return $scope.items
                            }
                        }
                    });
                    modalInstance.opened.then(function() { // 模态窗口打开之后执行的函数  
                        //console.log('modal is opened');
                    });
                    modalInstance.result.then(function(result) {
                        //console.log(result);
                    }, function(reason) {
                        //console.log(reason); // 点击空白区域，总会输出backdrop  
                        // click，点击取消，则会暑促cancel  
                        //$log.info('Modal dismissed at: ' + new Date());
                    });
                };
            }
        ])
})
