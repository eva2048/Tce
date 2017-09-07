//加入项目
define(['app'], function(app) {
    app.register
        .controller('addMemberModalInstanceCtrl', ['$scope','$modal', '$modalInstance', '$log',
            function($scope,$modal, $modalInstance, items,evt) {
                $scope.items = items;
                $scope.selected = {
                    item: $scope.items[0]
                };
                $scope.copything=function(evt){
                    var content = '';
                    console.log(evt);
                    if( evt.originalEvent.clipboardData ){//chrome靠angular返回兼容
                      content = (evt.originalEvent || evt).clipboardData.getData('text/plain');
                    }
                    else if( window.clipboardData ){//ie，ie的剪贴板angular没有返回
                      content = window.clipboardData.getData('Text');
                    }
                };
                $scope.ok = function() {
                    $modalInstance.close($scope.selected);
                    console.log($scope.size);
                };
                $scope.cancel = function() {
                    $modalInstance.dismiss('cancel');
                };
                $scope.open1 = function() {
                    var modalInstance1 = $modal.open({
                        templateUrl: 'tpls/modal/addMember1.html',
                        controller: 'addMemberModalInstanceCtrl',
                        resolve: {
                            items: function() {
                                return $scope.items
                            }
                        }
                    });
                    modalInstance1.opened.then(function() { // 模态窗口打开之后执行的函数  
                        //console.log('modal is opened');
                    });
                    modalInstance1.result.then(function(result) {
                        //console.log(result);
                    }, function(reason) {
                        //console.log(reason); // 点击空白区域，总会输出backdrop  
                        // click，点击取消，则会暑促cancel  
                        //$log.info('Modal dismissed at: ' + new Date());
                    });

                };
                $scope.open2 = function() {
                    var modalInstance2 = $modal.open({
                        templateUrl: 'tpls/modal/addMember2.html',
                        controller: 'addMemberModalInstanceCtrl',
                        size: 'lg',
                        resolve: {
                            items: function() {
                                return $scope.items
                            }
                        }
                    });
                    modalInstance2.opened.then(function() { // 模态窗口打开之后执行的函数  
                        //console.log('modal is opened');
                    });
                    modalInstance2.result.then(function(result) {
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
