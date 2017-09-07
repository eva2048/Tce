//加入项目
define(['app'], function(app) {
    app.register
        .controller('deblockingModalCtrl', ['$rootScope', '$scope', '$modal','$log',
            function($rootScope, $scope, $modal, $log, $stateParams) {
                var scope = $rootScope.$new();
                $scope.items = ['item1', 'item2', 'item3'];
                $scope.open = function(x) {
                    var modalInstance = $modal.open({
                        templateUrl: 'tpls/modal/deblocking.html',
                        controller: 'deblockingModalInstanceCtrl',
                        scope: scope,
                        resolve: {
                            items: function() {
                                return $scope.items;
                            }
                        }
                    });

                    if (x == "1") {
                        scope.data = {
                            lock: "定制缺陷流程",
                            pay: "500",
                        };

                    } else {
                        scope.data = {
                            lock: "自定义属性",
                            pay: "800",
                        };

                    }
                    var data = $scope.data;
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
