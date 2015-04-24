/*! wnd-string-format - v0.0.5 - 2015-04-24
* http://leornado.github.io/wnd-string-format
* Copyright (c) 2015 leornado; Licensed MIT */
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

  String.prototype.format = function (args) {
    var result = this, reg;
    if (arguments.length <= 0) {
      return result;
    }

    if (arguments.length === 1 && isObject(args)) {
      for (var key in args) {
        if (args[key] !== undefined) {
          reg = new RegExp('({' + key + '})', 'g');
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      var array = arguments.length === 1 && isArray(args) ? args : arguments;
      for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
          reg = new RegExp('({)' + i + '(})', 'g');
          result = result.replace(reg, array[i]);
        }
      }
    }
    return result;
  };

})();
