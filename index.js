/**
 * Module dependencies
 */

var angular = window.angular;

var name = 'ng-alias';

var pkg = angular.module(name, []);
if(typeof module != "undefined") {
	module.exports = pkg;
}

pkg.name = name;

pkg.directive('ngAlias', [
  function() {
    return {
      link: function($scope, elem, attrs) {
        var aliases = attrs.ngAlias.split(/[;]+/);
        angular.forEach(aliases, function(alias) {
          var idx = alias.indexOf('=');
          var path = alias.substring(0, idx).trim().split('.');
          var expr = alias.substring(idx + 1, alias.length).trim();
          $scope.$watch(expr, function(val) {
            set(path, val, $scope, 0);
          });
        });
      }
    };
  }
]);

function set(path, val, scope, i) {
  var key = path[i];
  if (i === path.length - 1) return scope[key] = val;
  if (angular.isUndefined(scope[key])) scope[key] = {};
  return set(path, val, scope[key], i + 1);
}
