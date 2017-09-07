define(['app'], function(app) {
    app.register
        .controller('projectBugDetailCtrl',
            function($scope, $stateParams, $timeout) {
                $scope.isAttribute = 0;

                $scope.data = {
                    imgs: [{
                        id: 1,
                        src: "images/pic18.png"
                    }, {
                        id: 2,
                        src: "images/loading2.gif"
                    }, {
                        id: 3,
                        src: "images/pic0.png"
                    }, {
                        id: 3,
                        src: "images/upgrade_bg3.png"
                    }]
                }
                $scope.currentImg = 0;
                $scope.src = $scope.data.imgs[$scope.currentImg].src;
                //监听图片src,图片切换后，图片位置随即更新
                $scope.$watch('src', function() {
                    angular.element(document.querySelector(".big-pic-wrap"))[0].style.display = "none";
                    var timer = $timeout(
                        function() {
                            //获取当前窗口高度
                            var innerh = (window.innerHeight) * 0.8;
                            //获取当前窗口宽度
                            var innerw=(window.innerWidth)*0.9;
                            //获取当前图片高度
                            var h = angular.element(document.querySelector(".bigPic"))[0].height;
                            //获取当前图片宽度
                            var w=angular.element(document.querySelector(".bigPic"))[0].width;
                            //判断图片宽度
                            if(w<innerw){
                                w=-angular.element(document.querySelector(".bigPic"))[0].width / 2 - 5 + "px";
                            }else{
                                w=-innerw / 2 + "px";
                            }
                            //判断图片高度
                            if (h < innerh) {
                                h = -angular.element(document.querySelector(".bigPic"))[0].height / 2 + "px";
                            } else {
                                h = -innerh / 2 + "px";
                            };
                            /*var a = -angular.element(document.querySelector(".bigPic"))[0].width / 2 - 5 + "px";*/
                            //图片水平居中
                            angular.element(document.querySelector(".big-pic-wrap"))[0].style.marginLeft = w;
                            //图片垂直居中
                            angular.element(document.querySelector(".big-pic-wrap"))[0].style.marginTop = h;
                            angular.element(document.querySelector(".big-pic-wrap"))[0].style.display = "block";

                        },
                        50
                    );



                    //将resolve/reject处理函数绑定到timer promise上以确保我们的cancel方法能正常运行
                    timer.then(
                        function() {



                        },
                        function() {



                        }
                    );
                }, true)
                $scope.preImg = function() {
                    if ($scope.currentImg == 0) {
                        $scope.currentImg = $scope.data.imgs.length - 1;
                    } else {
                        $scope.currentImg--;
                    }
                    $scope.src = $scope.data.imgs[$scope.currentImg].src;
                }
                $scope.nextImg = function() {
                    if ($scope.currentImg == ($scope.data.imgs.length - 1)) {
                        $scope.currentImg = 0;
                    } else {
                        $scope.currentImg++;
                    }
                    $scope.src = $scope.data.imgs[$scope.currentImg].src;
                }

            })
        //图片预览
    app.register
        .directive('enlargePic', function() { //<span style="font-family: Arial, Helvetica, sans-serif;">enlargePic指令名称，写在需要用到的地方img中即可实现放大图片</span> 
            return {
                restrict: "AE",
                link: function(scope, elem) {
                    elem.bind('click', function($event) {
                        angular.element(document.querySelector(".mask"))[0].style.display = "block";

                        /*angular.element(document.querySelector(".bigPic"))[0].src = img.src;*/
                        //获取当前窗口高度
                        var innerh = (window.innerHeight) * 0.8;
                        var innerw=(window.innerWidth)*0.9;
                        var w=angular.element(document.querySelector(".bigPic"))[0].width;
                        if(w<innerw){
                            w=-angular.element(document.querySelector(".bigPic"))[0].width / 2 - 5 + "px";
                        }else{
                            w=-innerw / 2 + "px";
                        };
                        //获取当前图片高度
                        var h = angular.element(document.querySelector(".bigPic"))[0].height;
                        if (h < innerh) {
                            h = -angular.element(document.querySelector(".bigPic"))[0].height / 2 + "px";
                        } else {
                            h = -innerh / 2 + "px";
                        };
                        /*var a = -angular.element(document.querySelector(".bigPic"))[0].width / 2 - 5 + "px";*/
                        //图片水平居中
                        angular.element(document.querySelector(".big-pic-wrap"))[0].style.marginLeft = w;
                        //图片垂直居中
                        angular.element(document.querySelector(".big-pic-wrap"))[0].style.marginTop = h;


                    })
                }
            }
        })
        .directive('closePic', function() {
            return {
                restrict: "AE",
                link: function(scope, elem) {
                    elem.bind('click', function($event) {
                        angular.element(document.querySelector(".mask"))[0].style.display = "none";
                    })
                }
            }
        })
})
