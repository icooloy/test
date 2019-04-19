cordova.define("com.galanz.cordova.interface", function (require, exports, module) {
    var exec = require('cordova/exec');
    module.exports = {
        /**
         * native call js
         * @param {Function} callback success or error.
         */
        onCallBack: function (callback) {
            exec(callback, null, "GPPluginInterface", "onCallBack", []);
        },

        /**
         * js call native
         * @param {String} name
         * @param {Array} args
         * @param {Function} callback success or error
         */
        call: function (name, args, callback) {
            exec(callback, callback, "GPPluginInterface", name, args === null ? [] : args);
        }
    };
});
