angular.module('fnloadImage').directive('loadImage', function($filter){
    return {
        restrict: 'EA',
        template: '<div class="load-image-wrap">'+
            '<img src="{{imgSrc}}" ng-hide="loading" />'+
            '<p ng-show="loading">Loading...</p></div>',
        scope: {
            imgSrc: '@', //path of the image path to load
            fallbackSrc: '@' //path of the fallback image loacation
        },
        replace: true,
        link: function(scope, el, attrs) {
            scope.loading = true;

            function stopLoading(){
                scope.loading = false;
                scope.$digest();
            }

            angular.element(el.children()[0]).bind("load" , function(event){
                stopLoading();
            });

            angular.element(el.children()[0]).bind("error", function(){
                stopLoading();
                if(angular.isString(scope.fallbackSrc)){
                    el.children()[0].src = scope.fallbackSrc;
                }
            });
        }
    }
});
