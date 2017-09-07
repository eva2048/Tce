define(['app'],function(app){
	app.register
		.controller('projectListCtrl',
            function($scope, $stateParams) {
        $scope.isFadeIn = false;
        $scope.fadeIn = function() {
            $scope.isFadeIn = true;
        };
        $scope.fadeOut = function() {
            $scope.isFadeIn = false;
        };
        $scope.projectNavNow = $stateParams.num;
        $scope.totalNum = '5';
        $scope.atNum = '2';
        $scope.tcNum = '3';
        $scope.getStateUrl = function(state) {
            if (state == '进行中') {
                return 'images/icon_jingxz.png';
            } else if (state == '已结项') {
                return 'images/icon_yijx.png';
            } else {
                return 'images/icon_jiexz.png';
            }
        };
        $scope.isAllTest = function(type) {
            if (type == '众测项目') {
                return true;
            } else {
                return false;
            }
        };
        $scope.project = {
            subjects: [{
                type: 'TC项目',
                name: '百度开放云快照升级',
                createPeople: 'humq',
                state: '进行中',
                startTime: '2016-07-08',
                memberNum:20,
                defectNum:20,

            }, {
                type: '众测项目',
                name: '百度开放云快照升级',
                createPeople: 'humq',
                state: '已结项',
                startTime: '2016-07-08',
                memberNum:20,
                defectNum:20,
            }, {
                type: '众测项目',
                name: '百度开放云快照升级',
                createPeople: 'humq',
                state: '结项中',
                startTime: '2016-07-08',
                memberNum:20,
                defectNum:20,
            }],
        };
        //分页
        $scope.maxSize = 3;
        $scope.totalItems = 200;
        $scope.currentPage = 1;
        $scope.numPages = 3;
    })
})