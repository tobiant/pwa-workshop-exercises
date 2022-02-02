sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	'sap/m/MessageToast'
], function (Controller, formatter, Toast) {
	"use strict";

	return Controller.extend("advanced.pwa.controller.Home", {

		formatter: formatter,

		onInit: function () {

		},
		handleDelete: function (oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var sPath = oEvent.getParameter("listItem").getBindingContextPath()
			var oItem = oModel.getProperty(sPath)
			oModel.remove(sPath, {
				method: "DELETE",
				success: function () {
					Toast.show("Deleted product: '" + oItem.Name + "'.")
				},
				error: function (oError) {
					Toast.show("Error while deleting product: '" + oItem.Name + "'.")
				}
			})
		},
		handleAdd: function (oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var oInput = this.getView().byId("input"); 
			var sName = oInput.getValue();
			var iId = Math.floor(Math.random() * 90000) + 10000;

			if (!sName) {
				oInput.setValueState("Error");
				return Toast.show("Please enter a name for the new product.")
			}

			oModel.create("/Products", { ID: iId + 10000, Name: sName }, {
				method: "DELETE",
				success: function () {
					Toast.show("Created product: '" + sName + "'.")
					oInput.setValue("")
				},
				error: function (oError) {
					Toast.show("Error while creating product: '" + sName + "'.")
				}
			})
			
			oInput.setValueState("None");
		}
	});
});
