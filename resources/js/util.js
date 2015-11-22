(function(global) {
  "use strict";

  var UTIL = (function() {

    var unboundSlice = Array.prototype.slice;
    var slice = Function.prototype.call.bind(unboundSlice);

    //src: http://raganwald.com/2014/04/10/mixins-forwarding-delegation.html
    var extend = function() {
      var consumer = arguments[0];
      var providers = slice(arguments, 1);
      var key;
      var i;
      var provider;

      if (typeof consumer === "undefined") {
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

    var print = function(string) {
      var line = document.createElement("span");
      line.innerHTML = string;
      // document.body.appendChild(line);
      document.body.insertBefore(line, document.body.firstChild);
    };

    var println = function(string) {
      print(string + "<br>");
    };

    this.extend = extend;
    this.print = print;
    this.println = println;

    return this;
  }).call(UTIL || {});

  global.UTIL = UTIL;

})(this);
