module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig((function() {
		
		var MINIFIED_FILES = {
			'<%= MINIFIED_JS_IN_TEMP %>': [
				'<%= SRC_FOLDER %>/concat/jquery-1.11.3.min.js',
				'<%= JS_IN_TEMP %>'
			]
		};
		
		// Config template, completed by JS below
		
		var config = {
			
			// Variables to check
			
			CSS_NAME: 'desktop',
			CSS_PATH: '/style/',
			JS_NAME: 'script',
			JS_PATH: '/script/',
			MAIN_SCSS: '<%= SRC_FOLDER %>/scss/desktop.scss',
			MAIN_TS: '<%= SRC_FOLDER %>/ts/main/Main.ts',
			
			// Other variables
			
			BUILD_FOLDER: 'build',
			BUILD_TEST_FOLDER: 'build/test',
			JS_IN_TEMP: '<%= TMP_FOLDER %>/script/<%= JS_NAME %>.js', 
			KAPOCS_PATTERN: ['**', '!_INFO'],
			MINIFIED_JS_IN_TEMP: '<%= TMP_FOLDER %>/_asset_templates/script/<%= JS_NAME %>.min.js', 
			SRC_FOLDER: 'src',
			TMP_FOLDER: 'tmp',
			
			// Targets
			
			clean: {
				compile: [
					'<%= BUILD_FOLDER %>',
					'<%= TMP_FOLDER %>'
				],
				update: ['lib']
			},
			concat: {
				debug: {
					files: MINIFIED_FILES
				}
			},
			copy: {
				compile: {
					files:[{
						expand: true,
						cwd: '<%= SRC_FOLDER %>/_dropin',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/_dropin',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}]
				},
				update: {
					files: [{
						expand: true,
						cwd: 'bower_components/berek/src',
						src: ['**'],
						dest: 'lib'
					}, {
						expand: true,
						cwd: 'bower_components/illa/src',
						dot: true,
						src: '**',
						dest: 'lib'
					}, {
						expand: true,
						cwd: 'bower_components/jquery-d-ts/src',
						src: ['**'],
						dest: 'lib'
					}, {
						expand: true,
						cwd: 'bower_components/node-d-ts/src',
						dot: true,
						src: '**',
						dest: 'lib'
					}, {
						expand: true,
						cwd: 'node_modules/typescript/lib',
						dot: true,
						src: 'lib.core.es6.d.ts',
						dest: 'lib'
					}]
				},
				test: {
					files: [{
						expand: true,
						cwd: 'test/_dropin',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/test/_dropin',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}]
				}
			},
			kapocs: {
				compile: {
					assets: [{
						expand: true,
						cwd: '<%= SRC_FOLDER %>/_assets',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/_assets',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}],
					assetTemplates: [{
						expand: true,
						cwd: '<%= SRC_FOLDER %>/_asset_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/_asset_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}],
					templates: [{
						expand: true,
						cwd: '<%= SRC_FOLDER %>/_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_FOLDER %>'
					}]
				},
				test: {
					assets: [{
						expand: true,
						cwd: 'test/_assets',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/test/_assets',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}],
					assetTemplates: [{
						expand: true,
						cwd: 'test/_asset_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/test/_asset_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}],
					templates: [{
						expand: true,
						cwd: 'test/_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}, {
						expand: true,
						cwd: '<%= TMP_FOLDER %>/test/_templates',
						dot: true,
						src: '<%= KAPOCS_PATTERN %>',
						dest: '<%= BUILD_TEST_FOLDER %>'
					}]
				}
			},
			sass: {
				compile: {
					options: {
						outputStyle: 'compressed'
					},
					files: {
						'<%= TMP_FOLDER %>/_asset_templates<%= CSS_PATH %><%= CSS_NAME %>.css': '<%= MAIN_SCSS %>'
					}
				},
				debug: {
					options: {
						outputStyle: 'expanded'
					},
					files: {
						'<%= TMP_FOLDER %>/_asset_templates<%= CSS_PATH %><%= CSS_NAME %>.css': '<%= MAIN_SCSS %>'
					}
				}
			},
			shell: {
				compileTs: {
					command: '"node_modules/.bin/tsc" "<%= MAIN_TS %>" -out "<%= JS_IN_TEMP %>"'
				},
				compileTsTest: {
					command: '"node_modules/.bin/tsc" --noLib --out "tmp/test/_asset_templates/script/tests.js" "test/ts/tests/Main.ts"'
				},
				jasmine: {
					command: '"node_modules/.bin/jasmine"'
				},
				update: {
					command: [
						'bower prune',
						'bower update',
						'bower install'
					].join('&&')
				}
			},
			uglify: {
				compile: {
					options: {
						sourceMap: true,
						preserveComments: 'some'
					},
					files: MINIFIED_FILES
				}
			}
		};
		
		return config;
	})());
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-kapocs');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-shell');
	
	grunt.registerTask('compile', [
		'clean:compile',
		'copy:compile',
		'copy:test',
		'shell:compileTs',
		'shell:compileTsTest',
		'uglify:compile',
		'sass:compile',
		'kapocs:compile',
		'kapocs:test',
		'shell:jasmine'
	]);
	grunt.registerTask('debug', [
		'clean:compile',
		'copy:compile',
		'copy:test',
		'shell:compileTs',
		'shell:compileTsTest',
		'concat:debug',
		'sass:debug',
		'kapocs:compile',
		'kapocs:test',
		'shell:jasmine'
	]);
	grunt.registerTask('update', [
		'clean:update',
		'shell:update',
		'copy:update'
	]);
	grunt.registerTask('default', [
		'compile'
	]);
};