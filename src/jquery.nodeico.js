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
		var pluginName = 'nodeico',
			defaults = {
				name: 'jquery-nodeico',
				type: 'standard', // compact, mini, histogram
				downloads: false,
				rank: false,
				stars: false,
				months: 1, // 12, 9, 6, 3, 1
				height: 1 // 1, 2, 3
			};

		// The actual plugin constructor
		function Nodeico ( element, options ) {
				this.element = element;
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.url = this.makeUrl();
				this.init();
		}

		Nodeico.prototype = {
				init: function () {
					var img = document.createElement('img');
					img.src = this.url;
					this.element.appendChild(img);
				},
				makeUrl: function() {
					var url = 'https://nodei.co/npm/' + this.options.name + '.png',
						standard = false,
						histogram = false,
						first = true;
					switch (this.options.type) {
						case 'compact':
							url += '?compact=true';
							break;
						case 'mini':
							url += '?mini=true';
							break;
						case 'standard':
							standard = true;
							break;
						case 'histogram':
							histogram = true;
							break;
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
					} else if(histogram) {
						url = url.replace('npm', 'npm-dl');
						url += '?months=' + this.options.months + '&height=' + this.options.height;
					}
					return url;
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, 'plugin_' + pluginName ) ) {
								$.data( this, 'plugin_' + pluginName, new Nodeico( this, options ) );
						}
				});
		};

})( jQuery, window, document );
