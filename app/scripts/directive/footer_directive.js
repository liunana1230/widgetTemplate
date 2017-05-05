define(['angular'], function(angular) {
    return function() {
      return {
        restrict: 'A',
        templateUrl: '/partials/footer.html',
        controller: 'footerController',
        replace: true
      };
    }
});