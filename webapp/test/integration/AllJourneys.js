/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/danone/TravisTest/test/integration/pages/Common",
	"com/danone/TravisTest/test/integration/pages/View1",
	"com/danone/TravisTest/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.danone.TravisTest.view.",
		autoWait: true
	});
});