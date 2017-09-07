define(['app'], function(app) {
    app.register
        .controller('projectUsecaseManageCtrl',['$scope', '$q',
            function($scope, $q) {
                $scope.toggle = function(scope) {
                    scope.toggle();
                };

                /*    $scope.moveLastToTheBeginning = function() {
                        var a = $scope.data.pop();
                        $scope.data.splice(0, 0, a);
                    };
                */
                $scope.newSubItem = function(scope) {
                    var nodeData = scope.$modelValue;
                    nodeData.nodes.push({
                        id: nodeData.id * 10 + nodeData.nodes.length,
                        level: nodeData.level + 1,
                        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                        nodes: []
                    });
                };
                $scope.cSubItem = function(scope) {
                    var nodeData = scope.$modelValue;
                    nodeData.nodes.push({
                        id: nodeData.id * 10 + nodeData.nodes.length,
                        level: nodeData.level + 1,
                        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                        nodes: []
                    });
                };
                $scope.editItem1 = function(scope) {
                    scope.isEdit = false;
                };
                $scope.editItem = function(scope) {
                    if (scope.isEdit == undefined || scope.isEdit == false) {
                        scope.isEdit = true;
                    } else if (scope.isEdit == true) {
                        scope.isEdit = false;
                    }
                };
                /*$scope.treeOptions={
                    beforeDrop:function(e){
                        var source=e.source.nodeScope.node.title;
                        var destRoot=e.dest.nodesScope.node;
                        e.source.nodeScope.node.title
                        if(destRoot==undefined){
                            return $q.reject();
                        }
                        return;
                    }
                };*/
                $scope.collapseAll = function() {
                    $scope.$broadcast('angular-ui-tree:collapse-all');
                };

                $scope.expandAll = function() {
                    $scope.$broadcast('angular-ui-tree:expand-all');
                };
                $scope.data = [{
                    'id': 1,
                    'level': -1,
                    'title': '用例1',
                    'nodes': [{
                        'id': 11,
                        'level': 0,
                        'title': '用例1.1',
                        'nodes': [{
                            'id': 111,
                            'level': 1,
                            'title': '用例1.1.1',
                            'nodes': []
                        }]
                    }, {
                        'id': 12,
                        'level': 0,
                        'title': '用例1.2',
                        'nodes': []
                    }]
                }];
            }])
})
