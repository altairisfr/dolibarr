define("ace/snippets/visualforce",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText =undefined;
exports.scope = "visualforce";

});                (function() {
                    window.require(["ace/snippets/visualforce"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            