'use strict';
(function () {

  var toString = function (o) {
    return Object.prototype.toString.call(o);
  };

  var isArray = function (o) {
    return toString(o) === '[object Array]';
  };

  var isObject = function (o) {
    return toString(o) === '[object Object]';
  };

  var replaceByObject = function (s, o) {
    for (var key in o) {
      if (o[key] !== undefined) {
        var reg = new RegExp('({' + key + '})', 'g');
        s = s.replace(reg, o[key]);
      }
    }
    return s;
  };

  var replaceByArray = function (s, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        var reg = new RegExp('({)' + i + '(})', 'g');
        var val = array[i];
        if (isObject(val)) {
          val = JSON.stringify(val);
        }
        s = s.replace(reg, val);
      }
    }
    return s;
  };

  String.prototype.format = function (args) {
    var result = this;
    if (arguments.length <= 0) {
      return result;
    }

    if (arguments.length === 1 && isObject(args)) {
      result = replaceByObject(result, args);
      if (result === this.toString()) {
        result = replaceByArray(result, [args]);
      }
    } else {
      var array = arguments.length === 1 && isArray(args) ? args : arguments;
      result = replaceByArray(result, array);
    }
    return result;
  };

})();
