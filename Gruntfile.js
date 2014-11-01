module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("nodeico.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.nodeico.js"],
				dest: "dist/jquery.nodeico.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.nodeico.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.nodeico.js"],
				dest: "dist/jquery.nodeico.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Copy definitions		
		copy: {
		  main: {
		    src: 'dist/jquery.nodeico.min.js',
		    dest: 'demo/js/jquery.nodeico.min.js',
		  },
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["jshint", "concat", "uglify", "copy"]);
	grunt.registerTask("travis", ["jshint"]);

};
