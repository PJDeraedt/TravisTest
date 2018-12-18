/*global QUnit*/
sap.ui.define([
	"sap/ui/test/opaQunit",
	"com/danone/TravisTest/test/integration/pages/View1"
], function (opaTest) {
	"use strict";

	//This module tests that the app is loaded. Add any other relevant tests to check the UI of the app.
	//For more information on OPA, see https://sapui5.hana.ondemand.com/#/topic/2696ab50faad458f9b4027ec2f9b884d
	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartTheApp();

		// Assertions
		Then.onView1Page.iShouldSeeTheApp();

		Then.onView1Page.iTeardownTheApp();

	});

	//This is an example of an OPA Journey that needs to be fixed 
	/*
	opaTest("Should check additional UI elements", function (Given, When, Then) {
		// Arrangements
		Given.iStartTheApp();

		//Actions
		When.onView1Page.iDoMyAction();
		// Assertions
		Then.onView1Page.iDoMyAssertion();

		Then.iTeardownMyAppFrame();
	});
	*/
});