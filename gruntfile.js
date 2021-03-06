
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      standard: {
        options: {
          format: true
        },
        js: {
          src: ['plugin.js']
        }
      },
      uglify: {
        dist: {
          files: {
            'plugin.min.js': ['plugin.js']
          }
        }
      },
      watch: {
        // package:  {
        //   files: 'package.json',
        //   options: { reload: true }
        // },
        // gruntfile: {
        //   files: 'gruntfile.js',
        //   tasks: ['jshint:gruntfile'],
        // },
        js: {
          files: ['plugin.js'],
          tasks: ['standard:js'],
        }
      },
      bump: {
        options: {
          files: ['package.json','bower.json'],
          updateConfigs: [],
          commit: true,
          commitMessage: 'Release v%VERSION%',
          commitFiles: ['package.json','bower.json'],
          createTag: true,
          tagName: 'v%VERSION%',
          tagMessage: 'Version %VERSION%',
          push: true,
          pushTo: 'origin',
          gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
          globalReplace: false,
          prereleaseName: false,
          regExp: false
        }
      },
    });

    grunt.registerTask('default', ['standard','watch']);
    grunt.registerTask('build', ['standard','uglify']);
};
