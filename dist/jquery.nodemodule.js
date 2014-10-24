/*
 *  jQuery NodeModule - v0.2.1
 *  A jQuery plugin to display your Node Modules on NPM.
 *  http://gitub.com/vieiralucas/jquery-nodemodule
 *
 *  Made by Lucas Vieira
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

		// undefined is used here as the undefined global variable in ECMAScript 3 is
		// mutable (ie. it can be changed by someone else). undefined isn't really being
		// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
		// can no longer be modified.

		// window and document are passed through as local variable rather than global
		// as this (slightly) quickens the resolution process and can be more efficiently
		// minified (especially when both are regularly referenced in your plugin).

		// Create the defaults once
		var pluginName = 'nodeModule',
			defaults = {
				name: 'jquery-nodemodule',
				type: 'standard', //compact, mini
				downloads: false,
				rank: false,
				stars: false
			};

		// The actual plugin constructor
		function NodeModule ( element, options ) {
				this.element = element;
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.url = this.makeUrl();
				this.init();
		}

		NodeModule.prototype = {
				init: function () {
					var img = document.createElement('img');
					img.src = this.url;
					this.element.appendChild(img);
				},
				makeUrl: function() {
					var url = 'https://nodei.co/npm/' + this.options.name + '.png',
						standard = false,
						first = true;
					switch (this.options.type) {
						case 'compact':
							url += '?compact=true';
							break;
						case 'mini':
							url += '?mini=true';
							break;
						default:
							standard = true;
					}
					if(standard) {
						if(this.options.downloads) {
							first ? url += '?downloads=true' : url += '&downloads=true';
							first = false;
						}
						if(this.options.rank) {
							first ? url += '?downloadRank=true' : url += '&downloadRank=true';
							first = false;
						}
						if(this.options.stars) {
							first ? url += '?stars=true' : url += '&stars=true';
							first = false;
						}
					}
					return url;
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, 'plugin_' + pluginName ) ) {
								$.data( this, 'plugin_' + pluginName, new NodeModule( this, options ) );
						}
				});
		};

})( jQuery, window, document );
