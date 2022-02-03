sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("advanced.pwa.controller.Home", {

        formatter: formatter,

        onInit: function () {

        },
        onPress: function () {
			console.error("hallo")
        }
    });
});
