;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('test', ['btford.socket-io']).factory('mySocket', function(socketFactory) {
    return socketFactory();
  }).controller('MainCtrl', function($scope, mySocket) {
    $scope.value = {};
    $scope.text = '{}';
    mySocket.on('news', function(data) {
      return $scope.value = data;
    });
    mySocket.on('text', function(data) {
      return $scope.text = data;
    });
    return $scope.update = function(text) {
      return mySocket.emit('text', text);
    };
  });

}).call(this);

},{}]},{},[1])
;