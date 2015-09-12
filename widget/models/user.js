define([
  'underscore',
  'backbone'
  
], function(_, Backbone){

	'use strict';

	return Backbone.Model.extend({
		
		urlRoot : '/api/users/',

		/**
		 * initialize()
		 * @desc initialize the model
		 *
		 */
		initialize: function(){

		}
	
	});

});