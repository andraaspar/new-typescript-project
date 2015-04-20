module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig((function() {
		
		var TEST_COUNT = 1;
		
		var config = {
			CSS_NAME: 'desktop',
			JS_NAME: 'script',
			
			clean: {
				tests: [
					'build',
					'tmp'
				]
			},
			kapocs: {
				tests: {
					assets: [{
						expand: true,
						cwd: 'src/assets',
						dot: true,
						src: ['**'],
						dest: 'build'
					}],
					assetTemplates: [{
						expand: true,
						cwd: 'src/asset_templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}, {
						expand: true,
						cwd: 'tmp/asset_templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}],
					templates: [{
						expand: true,
						cwd: 'src/templates',
						dot: true,
						src: ['**'],
						dest: 'build'
					}]
				}
			},
			less: {
				tests: {
					files: {}
				}
			},
			typescript: {
				tests: {
					files: {}
				}
			},
			sas: {
				update: {}
			},
			shell: {
				update: {
					command: ['bower prune', 'bower update', 'bower install'].join('&&')
				}
			}
		};
		
		for (var i = 1; i <= TEST_COUNT; i++) {
			var folderPath = 'tmp/asset_templates/test' + i;
			var jsPath = folderPath + '/script/<%= JS_NAME %>.js';
			var cssPath = folderPath + '/style/<%= CSS_NAME %>.css';
			
			config.less.tests.files[cssPath] = 'test/test' + i + '/_style.less';
			config.typescript.tests.files[jsPath] = 'test/test' + i + '/Main.ts';
		}
		
		return config;
	})());
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-kapocs');
	grunt.loadNpmTasks('grunt-sas');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-typescript');
	
	grunt.registerTask('compile', ['clean:compile', 'typescript:compile', 'uglify:compile', 'copy:compile', 'less:compile', 'copy:compile2', 'kapocs:compile']);
	grunt.registerTask('update', ['shell:update', 'sas:update']);
	grunt.registerTask('default', ['compile']);
};