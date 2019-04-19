cordova.define('cordova/plugin_list', function (require, exports, module) {
module.exports = [
    {
        "file": "jsplugins/PluginInterface.js",
        "id": "com.galanz.cordova.interface",
        "pluginId": "galanz-plugin-interface",
        "clobbers": [
            "native"
        ]
    }
];
module.exports.metadata =
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "galanz-plugin-interface": "1.0.0"
};
// BOTTOM OF METADATA
});
