sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"advanced/pwa/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("advanced.pwa.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});
