(function(global) {
  'use strict';

  var UTIL = (function() {

    //src: http://raganwald.com/2014/04/10/mixins-forwarding-delegation.html
    var defaults = function() {
      var consumer = arguments[0];
      var providers = [].slice.call(arguments, 1);
      var key;
      var i;
      var provider;

      if (typeof consumer === 'undefined') {
        consumer = {};
      }

      for (i = 0; i < providers.length; ++i) {
        provider = providers[i];
        for (key in provider) {
          if (!consumer.hasOwnProperty(key)) {
            consumer[key] = provider[key];
          }
        }
      }

      return consumer;
    };

    this.defaults = defaults;

    return this;
  }).call(UTIL || {});

  global.UTIL = UTIL;

})(this);
