define(['app'], function(app) {
    app.register
        .controller('projectReportCtrl',
            function($scope, $stateParams) {
                $scope.chart1 = {
                        options: {
                            chart: {
                                type: 'column'
                            },
                            xAxis: {
                                categories: [
                                    '一月',
                                    '二月',
                                    '三月',
                                    '四月',
                                    '五月',
                                    '六月',
                                    '七月',
                                    '八月',
                                    '九月',
                                    '十月',
                                    '十一月',
                                    '十二月'
                                ],
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '降雨量 (mm)'
                                }
                            },
                            exporting: {

                                enabled:true,//默认为可用，当设置为false时，图表的打印及导出功能失效

                                filename: '52wulian.org', //导出的文件名

                                type: 'image/png', //导出的文件类型

                                width: 800 //导出的文件宽度

                            },
                        },

                        series: [{
                            name: '东京',
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                        }, {
                            name: '纽约',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                        }, {
                            name: '伦敦',
                            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                        }, {
                            name: '柏林',
                            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                        }],
                        title: {
                            text: 'HelloWorld'
                        }
                    },
                    $scope.chart2 = {
                        options: {
                            chart: {
                                type: 'line',
                            },
							tooltip:{
								shared:true
							},
                            xAxis: {
                                categories: [
                                    '一月',
                                    '二月',
                                    '三月',
                                    '四月',
                                    '五月',
                                    '六月',
                                    '七月',
                                    '八月',
                                    '九月',
                                    '十月',
                                    '十一月',
                                    '十二月'
                                ],
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '降雨量 (mm)'
                                }
                            },
                        },

                        series: [{
                            name: '东京',
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                        }, {
                            name: '纽约',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                        }, {
                            name: '伦敦',
                            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                        }, {
                            name: '柏林',
                            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 59.6, 47.6, 39.1, 46.8, 51.1]
                        }],
                        title: {
                            text: 'HelloWorld'
                        }
                    },
                    $scope.chart3 = {
                        options: {
                            chart: {
                                type: 'pie'
                            },
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: false
                                    },
                                    showInLegend: true
                                }
                            },
                        },

                        series: [{
                            name: 'Brands',
                            colorByPoint: true,
                            data: [{
                                name: 'Microsoft Internet Explorer',
                                y: 56.33
                            }, {
                                name: 'Chrome',
                                y: 24.03,
                                sliced: true,
                                selected: true
                            }, {
                                name: 'Firefox',
                                y: 10.38
                            }, {
                                name: 'Safari',
                                y: 4.77
                            }, {
                                name: 'Opera',
                                y: 0.91
                            }, {
                                name: 'Proprietary or Undetectable',
                                y: 0.2
                            }]
                        }],
                        title: {
                            text: 'HelloWorld'
                        }
                    },
                    $scope.chart = $scope.chart1;
                $scope.current = '1';
                $scope.chartshow = '1';
                $scope.setCurrent = function(tab) {
                    $scope.current = tab;
                };
                $scope.isSet = function(tab) {
                    return $scope.current == tab;
                };
                $scope.isChart = function(tab) {
                    return $scope.chartshow == tab;
                };
                $scope.setChart = function(tab) {
                    if (tab == '2') {
                        $scope.chart = $scope.chart2;
                        $scope.chartshow = '1';
                    } else if (tab == '1') {
                        $scope.chart = $scope.chart1;
                        $scope.chartshow = '1';
                    } else if (tab == '3') {
                        $scope.chart = $scope.chart3;
                        $scope.chartshow = '1';
                    } else if (tab == '4') {
                        $scope.chartshow = '2';
                    } else if (tab == '5') {
                        $scope.chartshow = '3';
                    }
                };
            })
})
