define(['app'], function(app) {
    app.register
        .controller('customModelPropertiesCtrl',
            function($scope) {
                $scope.tableDetail = false;
                $scope.toggle = function(index) {
                    this.tableDetail = !this.tableDetail;
                }
                $scope.tables = {
                    list: [{
                        //              第一个
                    }, {
                        //              第二个
                    }, {
                        //              第三个
                    }]
                }
                $scope.List = {
                    subjects: [{
                        shuxing: '属性一',
                        classs: 'Date',
                        mode: '显示',
                        moren: '',
                        isDefault: true,

                    }, {
                        shuxing: '属性二',
                        classs: 'ComboBox',
                        mode: '显示',
                        moren: '登录，注册',
                        isDefault: false,
                    }, {
                        shuxing: '属性三',
                        classs: 'Textinput',
                        mode: '显示',
                        moren: '',
                        isDefault: false,
                    }],
                }
            })
})
