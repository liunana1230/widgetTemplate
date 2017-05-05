define(['angular'], function(angular) {
    return function() {
      return {
        restrict: 'A',
        templateUrl: '/widgetTemplate/partials/footer.html',
        controller: 'footerController',
        replace: true
      };
    }
});