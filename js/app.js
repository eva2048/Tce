define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap', 'ui.tree','highcharts-ng'])
    app.config(function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.register = {
                //得到$controllerProvider的引用
                controller: $controllerProvider.register,
                //同样的，这里也可以保存directive／filter／service的引用
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                service: $provide.service
            };
        })
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('index/1');
            $stateProvider
            //登录
                .state("login", {
                    url: "/login",
                    controller: 'loginCtrl',
                    templateUrl: '../tpls/login/register.html',
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/loginCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                /*.state("pdf",{
                    url:"/pdf",
                    templateUrl:'../tpls/login/pdf.html',
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/login/helpCenterCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })*/
                //项目列表
                .state("index", {
                    url: "/index/:num",
                    views: {
                        '': {
                            templateUrl: '../tpls/index.html'
                        },
                        'topbar@index': {
                            templateUrl: '../tpls/topbar.html',
                            controller: 'topbarCtrl'
                        },
                        'main@index': {
                            templateUrl: '../tpls/main.html',
                            controller: 'projectListCtrl'
                        },
                        'projectNav@index': {
                            templateUrl: '../tpls/projectList/projectNav.html',
                        },
                        'projectBody@index': {
                            templateUrl: '../tpls/projectList/projectBody.html'
                        },
                        'projectDetail@index': {
                            templateUrl: '../tpls/projectList/projectDetail.html',
                            controller: 'projectDetailCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projectList/projectListCtrl',
                                'controller/topbarCtrl',
                                'controller/projectList/projectDetailCtrl',
                                'controller/modal/injectProjectModalCtrl',
                                'controller/modal/injectProjectModalInstanceCtrl',
                                'controller/modal/successModalCtrl',
                                'controller/modal/successModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('index.atProject', {
                    url: '/atProject',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/atProject.html'
                        }
                    }
                })
                .state('index.tcProject', {
                    url: '/tcProject',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/tcProject.html'
                        }
                    }
                })
                //创建项目
                .state('index.createProject', {
                    url: '/createProject',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/createProject.html',
                            controller: 'createProjectCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projectList/createProjectCtrl',
                                'controller/modal/checkDefectProcessModalCtrl',
                                'controller/modal/checkDefectProcessModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //项目列表角色管理
                .state('index.roleManage', {
                    url: '/roleManage',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/setting/roleManage.html',
                            controller: 'roleManageCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projectList/setting/roleManageCtrl',
                                'controller/modal/addRoleModalCtrl',
                                'controller/modal/addRoleModalInstanceCtrl',
                                'controller/modal/addRolegroupModalCtrl',
                                'controller/modal/addRolegroupModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //项目列表缺陷流程定制
                .state('index.customDefectProcess', {
                    url: '/customDefectProcess',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/setting/customDefectProcess.html',
                            controller: 'customDefectProcessCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projectList/setting/customDefectProcessCtrl',
                                'controller/modal/editDefectProcessModalCtrl',
                                'controller/modal/editDefectProcessModalInstanceCtrl',
                                'controller/modal/defectStateManageModalCtrl',
                                'controller/modal/defectStateManageModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //项目列表自定义模块属性
                .state('index.customModelProperties', {
                    url: '/customModelProperties',
                    views: {
                        'projectBody@index': {
                            templateUrl: 'tpls/projectList/setting/customModelProperties.html',
                            controller: 'customModelPropertiesCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projectList/setting/customModelPropertiesCtrl',
                                'controller/modal/modelPropertiesModalCtrl',
                                'controller/modal/modelPropertiesModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //项目详情
                .state('projectInner', {
                    url: '/projectInner/:num2/:projectId',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'topbar@projectInner': {
                            templateUrl: 'tpls/topbar.html',
                            controller: 'topbarCtrl'
                        },
                        'main@projectInner': {
                            templateUrl: 'tpls/projectInner/projectMain.html',
                            controller: 'projectInnerCtrl'
                        },
                        'projectInnerNav@projectInner': {
                            templateUrl: 'tpls/projectInner/projectInnerNav.html',
                            controller: 'projectInnerNavCtrl'
                        },
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/bug/projectBugManage.html',
                            controller: 'projectBugManageCtrl'
                        },
                        'projectInnerDetail@projectInner': {
                            templateUrl: 'tpls/projectInner/bug/projectBugDetail.html',
                            controller: 'projectBugDetailCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/projectInnerCtrl',
                                'controller/topbarCtrl',
                                'controller/projecInner/projectInnerNavCtrl',
                                'controller/projecInner/bug/projectBugManageCtrl',
                                'controller/projecInner/bug/projectBugDetailCtrl',
                                'controller/modal/defectExportModalCtrl',
                                'controller/modal/defectExportModalInstanceCtrl',
                                'controller/modal/advancedFilterModalCtrl',
                                'controller/modal/advancedFilterModalInstanceCtrl',
                                'controller/modal/defectExportSetModalCtrl',
                                'controller/modal/defectExportSetModalInstanceCtrl',
                                'controller/modal/customColumnModalCtrl',
                                'controller/modal/customColumnModalInstanceCtrl',
                                'controller/modal/connectUsecaseModalCtrl',
                                'controller/modal/connectUsecaseModalInstanceCtrl',
                                'controller/modal/chooseHandlerModalCtrl',
                                'controller/modal/chooseHandlerModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('projectInner.createBug', {
                    url: '/createBug',
                    views: {
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/bug/projectCreateBug.html',
                            controller: 'createBugCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/bug/createBugCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('projectInner.usecaseManage', {
                    url: '/usecaseManage',
                    views: {
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/usecase/projectUsecaseManage.html',
                            controller: 'projectUsecaseManageCtrl'
                        },
                        'projectInnerDetail@projectInner': {
                            templateUrl: 'tpls/projectInner/usecase/projectUsecaseDetail.html',
                            controller: 'projectUsecaseDetailCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/usecase/projectUsecaseManageCtrl',
                                'controller/projecInner/usecase/projectUsecaseDetailCtrl',
                                'controller/modal/usecaseExportModalCtrl',
                                'controller/modal/usecaseExportModalInstanceCtrl',
                                'controller/modal/usecaseExportSetModalCtrl',
                                'controller/modal/usecaseExportSetModalInstanceCtrl',
                                'controller/modal/usecaseCommitCountModalCtrl',
                                'controller/modal/usecaseCommitCountModalInstanceCtrl',
                                'controller/modal/addUsecaseModalCtrl',
                                'controller/modal/addUsecaseModalInstanceCtrl',
                                'controller/modal/usecaseFileManagerModalCtrl',
                                'controller/modal/usecaseFileManagerModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('projectInner.groupManage', {
                    url: '/groupManager',
                    views: {
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/personal/personalGroupManage.html',
                            controller: 'personalGroupManagerCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/personal/personalGroupManageCtrl',
                                'controller/modal/addMemberModalCtrl',
                                'controller/modal/addMemberModalInstanceCtrl',
                                'controller/modal/editRoleModalCtrl',
                                'controller/modal/editRoleModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('projectInner.projectDocument', {
                    url: '/projectDocument',
                    views: {
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/personal/personalProjectDocument.html',
                            controller: 'personalProjectDocumentCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/personal/personalProjectDocumentCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('projectInner.projectReport', {
                    url: '/projectReport',
                    views: {
                        'projectInnerBody@projectInner': {
                            templateUrl: 'tpls/projectInner/report/projectReport.html',
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/projecInner/report/projectReportCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter', {
                    url: '/adminCenter',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'topbar@adminCenter': {
                            templateUrl: 'tpls/topbar_admin.html',
                            controller: 'topbarCtrl'
                        },
                        'main@adminCenter': {
                            templateUrl: 'tpls/main.html',
                            controller: 'projectListCtrl'
                        },
                        'projectNav@adminCenter': {
                            templateUrl: 'tpls/admin/projectNav_admin.html',
                        },
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin.html',
                        },
                        'projectDetail@adminCenter': {
                            templateUrl: 'tpls/admin/projectDetail_admin.html',
                            controller: 'projectDetailAdminCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/topbarCtrl',
                                'controller/projectList/projectListCtrl',
                                'controller/admin/projectDetailAdminCtrl',
                                'controller/admin/projectListAdminCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter.userManager', {
                    url: '/userManager',
                    views: {
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin_user.html'
                        },
                        'projectDetail@adminCenter': {
                            templateUrl: 'tpls/admin/projectDetail_admin_user.html',
                            controller: 'userDetailAdminCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/admin/userListAdminCtrl',
                                'controller/admin/userDetailAdminCtrl',
                                'controller/modal/editRelateDefectProcessModalCtrl',
                                'controller/modal/editRelateDefectProcessModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter.orderManager', {
                    url: '/orderManager',
                    views: {
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin_order.html',
                            controller: 'orderListAdminCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/admin/orderListAdminCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter.processManager', {
                    url: '/processManager',
                    views: {
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin_process.html',
                            controller: 'processAdminCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/admin/processAdminCtrl',
                                'controller/modal/editDefectProcessAdminModalCtrl',
                                'controller/modal/editDefectProcessAdminModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter.processManager.roleManager', {
                    url: '/roleManager',
                    views: {
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin_role.html',
                            controller: 'roleAdminCtrl',
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/admin/roleAdminCtrl',
                                'controller/modal/addRoleModalCtrl',
                                'controller/modal/addRoleModalInstanceCtrl',
                                'controller/modal/addRolegroupModalCtrl',
                                'controller/modal/addRolegroupModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('adminCenter.processManager.processStateManager', {
                    url: '/processStateManager',
                    views: {
                        'projectBody@adminCenter': {
                            templateUrl: 'tpls/admin/projectBody_admin_processState.html',
                            controller: 'defectStateAdminCtrl',
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/admin/defectStateAdminCtrl',
                                'controller/modal/addDefectStateModalCtrl',
                                'controller/modal/addDefectStateModalInstanceCtrl',
                                'controller/modal/addDefectStategroupModalCtrl',
                                'controller/modal/addDefectStategroupModalInstanceCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('myOrder', {
                    url: '/myOrder',
                    views: {
                        '': {
                            templateUrl: 'tpls/myOrder.html'
                        },
                        'topbar@myOrder': {
                            templateUrl: 'tpls/topbar.html',
                            controller: 'topbarCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/topbarCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                .state('upgrade', {
                    url: '/upgrade',
                    views: {
                        '': {
                            templateUrl: 'tpls/upgrade.html'
                        },
                        'topbar@upgrade': {
                            templateUrl: 'tpls/topbar.html',
                            controller: 'topbarCtrl'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/topbarCtrl',
                                'controller/modal/upgradeModalCtrl',
                                'controller/modal/packagebuyModalCtrl',
                                'controller/modal/packagebuyModalInstanceCtrl',
                                'controller/modal/custombuyModalCtrl',
                                'controller/modal/custombuyModalInstanceCtrl'
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //帮助中心
                .state('helpCenter', {
                    url: '/helpCenter/:hnum1/:hnum2/:hnum3',
                    views: {
                        '': {
                            templateUrl: 'tpls/helpCenter/helpCenter.html'
                        },
                        'topbar@helpCenter': {
                            templateUrl: 'tpls/topbar.html',
                            controller: 'topbarCtrl'
                        },
                        'helpCenterNav@helpCenter':{
                            templateUrl: 'tpls/helpCenter/helpCenterNav.html',                       
                        },
                        'helpCenterNavLeft@helpCenter':{
                            templateUrl: 'tpls/helpCenter/leftNav/quickUse.html',                           
                        },
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/kssy/kssy.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'controller/topbarCtrl',
                                'controller/helpCenter/helpCenterCtrl',
                            ], function() { deferred.resolve(); });
                            return deferred.promise;
                        }]
                    }
                })
                //产品说明
                .state('helpCenter.productsExp', {
                    url: '/cpsm',
                    views: {
                        'helpCenterNavLeft@helpCenter':{
                            templateUrl: 'tpls/helpCenter/leftNav/productsExp.html',                           
                        },
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cpsm/cpsm.html'
                        }
                    },
                }) 
                .state('helpCenter.productsExp.drdc', {
                    url: '/drdc',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cpsm/drdc.html'
                        }
                    },
                }) 
                .state('helpCenter.productsExp.gnxj', {
                    url: '/gnxj',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cpsm/gnxj.html'
                        }
                    },
                })  
                .state('helpCenter.productsExp.qxlcdz', {
                    url: '/qxlcdz',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cpsm/qxlcdz.html'
                        }
                    },
                }) 
                .state('helpCenter.productsExp.zdymk', {
                    url: '/zdymk',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cpsm/zdymk.html'
                        }
                    },
                })  
                //名词解释
                .state('helpCenter.explanation', {
                    url: '/xmlx',
                    views: {
                        'helpCenterNavLeft@helpCenter':{
                            templateUrl: 'tpls/helpCenter/leftNav/explanation.html',                           
                        },
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/mcjs/xmlx.html'
                        }
                    },
                }) 
                .state('helpCenter.explanation.zhlx', {
                    url: '/zhlx',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/mcjs/zhlx.html'
                        }
                    },
                }) 
                //常见问题
                .state('helpCenter.FAQ', {
                    url: '/zcwt',
                    views: {
                        'helpCenterNavLeft@helpCenter':{
                            templateUrl: 'tpls/helpCenter/leftNav/FAQ.html',                           
                        },
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cjwt/zcwt.html'
                        }
                    },
                }) 
                .state('helpCenter.FAQ.fywt', {
                    url: '/fywt',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cjwt/fywt.html'
                        }
                    },
                }) 
                .state('helpCenter.FAQ.zhwt', {
                    url: '/zhwt',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cjwt/zhwt.html'
                        }
                    },
                })  
                .state('helpCenter.FAQ.xmwt', {
                    url: '/xmwt',
                    views: {
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/cjwt/xmwt.html'
                        }
                    },
                }) 
                //常见问题
                .state('helpCenter.updateLog', {
                    url: '/updateLog',
                    views: {
                        'helpCenterNavLeft@helpCenter':{
                            templateUrl: 'tpls/helpCenter/leftNav/updateLog.html',                           
                        },
                        'helpCenterContent@helpCenter':{
                            templateUrl:'tpls/helpCenter/content/updateLog/update.html'
                        }
                    },
                })                               
        }])
    return app;
})
