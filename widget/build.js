/**
 *
 * RUN: node node_modules/requirejs/bin/r.js -o widget/build.js include=requireLib wrap=true
 */
({
	wrap: true,
	include: 'requireLib',
	preserveLicenseComments: false,
	baseUrl: ".",
	paths: {
		'requireLib': '../node_modules/requirejs/require',
		'text': '../node_modules/requirejs-text/text',
		'jquery': '../node_modules/jquery/dist/jquery.min',
		'underscore': '../node_modules/underscore/underscore-min',
		'backbone': '../node_modules/backbone/backbone',
		'utils': 'libs/utils',
	},
	name: "main",
	out: "../widget.js"
})