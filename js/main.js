require.config({
	baseUrl: 'js',
	paths: {
		'app': 'app',
		'jquery': 'jquery-1.10.2.min',
		'angular': 'angular.min',
		'angular-animate':'angular-animate.min',
		'bootstrap':'bootstrap.min',
		'router': 'angular-ui-router.min',	
		'ui-bootstrap-tpls':'ui-bootstrap-tpls.min',			
		'angular-ui-tree':'angular-ui-tree.min',	
		'highstock':'highstock.src',
		'exporting':'exporting.src',
		'highcharts-ng':'highcharts-ng',
		'bootstrap-datetimepicker':'bootstrap-datetimepicker',
		'time-ng':'time-ng'
	},
	shim: {
		'angular': {
			exports: 'angular',
		},
		'ui-bootstrap-tpls':{
			deps: ['angular']
		},
		'angular-ui-tree':{
			deps: ['angular']
		},
		'angular-animate':{
			deps: ['angular']
		},
		'router': {
			deps: ['angular']
		},
		'app': {
			deps: ['router']
		},
		'bootstrap':{
			deps:['jquery']
		},
		'exporting':{
			deps:['highstock']
		}
	}
})
// 初始化myModule模块
require(['angular','app','jquery','bootstrap','bootstrap-datetimepicker','time-ng','ui-bootstrap-tpls','angular-animate','angular-ui-tree','highstock','exporting','highcharts-ng'],function(){
	angular.bootstrap(document, ['myModule'])
})