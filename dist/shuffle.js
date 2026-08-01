"use strict";
var MitchAllen = MitchAllen || {};
MitchAllen.Shuffle = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // modules/index.js
  var require_index = __commonJS({
    "modules/index.js"(exports, module) {
      module.exports.create = (spec) => {
        if (!spec) {
          return null;
        }
        if (!spec.array) {
          return null;
        }
        var _array = spec.array.slice(0);
        return {
          shuffle: function() {
            var i = 0, j = 0, temp = null;
            for (i = _array.length - 1; i > 0; i -= 1) {
              j = Math.floor(Math.random() * (i + 1));
              temp = _array[i];
              _array[i] = _array[j];
              _array[j] = temp;
            }
            return _array;
          }
        };
      };
    }
  });
  return require_index();
})();
//# sourceMappingURL=shuffle.js.map
