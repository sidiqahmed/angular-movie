function back() {
  return {
    restrict: 'E',
    templateUrl: 'app/common/templates/back-button.tpl.html'
  }
}

angular.module('Movie.directives.back', [])
.directive('back', back);
