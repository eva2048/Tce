define(['app'], function(app) {
    app.register
        .controller('createBugCtrl',
            function($scope, $stateParams) {
                $scope.pName = '';
                $scope.pStartTime = '';
                $scope.pEndTime = '';
                $scope.pProcess = '';
                $scope.pModel = ['123', '222'];
                $scope.pState = '';
                $scope.sDescribe = '';
                $scope.modelItem = '';
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
                //返回
                $scope.backUrl = '';
                $scope.backUrlClick = function() {
                    if ($stateParams.num == 1) {
                        return 'index({num:1})';
                    } else if ($stateParams.num == 2) {
                        return 'index.atProject({num:2})';
                    } else {
                        return 'index.tcProject({num:3})';
                    }
                };

                $scope.sModelDel = function(val) {
                    for (var i = 0; i < $scope.pModel.length; i++) {
                        if ($scope.pModel[i] == val) {
                            $scope.pModel.splice(i, 1);
                        }
                    }
                };
                $scope.pCheck = function(value) {
                    if (value == '') {
                        return true;
                    } else {
                        return false;
                    }
                };

                function arrindex(arr, obj) { //判断是否重复  
                    var i = arr.length;
                    while (i--) {
                        if (arr[i] === obj) {
                            return true;
                        }
                    }
                    return false;
                };
                $scope.addModel = function(e) {
                    var keycode = window.event ? e.keyCode : e.which;
                    if (keycode == 13) {
                        if (!arrindex($scope.pModel, $scope.modelItem)) {
                            $scope.pModel.push($scope.modelItem);
                            $scope.modelItem = '';
                        } else {
                            $scope.modelItem = '';
                        }
                    }
                };
            })
})
