sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.danone.TravisTest.controller.View1", {
		testFunction: function() {
			alert("test");
		}
	});
});