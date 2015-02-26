module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    useminPrepare: {

      html:'app/Default.aspx',
      options: {
        dest: 'build'
      }

    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      all: {
        files: {
          '.tmp/concat/js/app.js': ['.tmp/concat/js/app.js']
        }
      }
    },

    usemin:{
      html: ['build/Default.aspx']
    },

    copy:{
      main: {
        expand: true,
        cwd: 'app',
        src: ['*', 'bin/*', 'partials/*', 'images/*'],
        dest: 'build/',
        filter: 'isFile'
      },
      nonConcatLibs: {
        expand: true,
        cwd: 'app/libs',
        src: ['font-awesome/css/*', 'font-awesome/fonts/*', 'webfont-opensans/*', 'bootstrap/dist/fonts/*', 'bootstrap/dist/css/*'],
        dest: 'build/libs/'
      },
      buildNoMin: {
        expand: true,
        cwd: '.tmp/concat/js',
        src: 'app.js',
        dest: 'build/js/'
      },
        deploy_dev: {
            expand: true,
            cwd: 'build',
            src: '**',
            dest: '\\\\axcuscatwsweb01\\c$\\inetpub\\wwwroot\\<%= pkg.name %>Dev'
        },
      deploy: {
          expand: true,
          cwd: 'build',
          src: '**',
          dest: '\\\\axcuscatwsweb01\\c$\\inetpub\\wwwroot\\<%= pkg.name %>'
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');

  // Define your tasks here

  grunt.registerTask('default', ['copy:main', 'copy:nonConcatLibs', 'useminPrepare', 'concat', 'usemin']);
  grunt.registerTask('build', ['copy:main', 'copy:nonConcatLibs', 'useminPrepare', 'concat', 'ngAnnotate', 'cssmin', 'uglify', 'usemin']);
  grunt.registerTask('deploy-dev', ['copy:deploy_dev']);
  grunt.registerTask('deploy', ['copy:deploy']);
  grunt.registerTask('deploy-all', ['copy:deploy_dev', 'copy:deploy']);
};