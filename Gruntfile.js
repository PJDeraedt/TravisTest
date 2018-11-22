module.exports = function (grunt) {
	"use strict";
	grunt.loadNpmTasks('grunt-sapui5');
	//grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	grunt.registerTask("default", [
		"clean",
		"lint",
		"build"
	]);
};