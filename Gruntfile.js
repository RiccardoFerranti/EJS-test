module.exports = function(grunt) {
  // Qui setterai i plugin
  //All configuration goes here 
  grunt.initConfig({
      // get the configuration info from package.json ----------------------------
      // this way we can use things like name and version (pkg.name)
      pkg: grunt.file.readJSON('package.json'),
      sass: { // Task
          dist: { // Target
              files: { 
                  'stylesheets/css/main.css' : 'stylesheets/scss/main.scss'
              }
          }
      },
      cssmin: {
        dist: {
          options: {
             banner: '/*! MyLib.js 1.0.0 | Riccardo Ferranti (@RiccardoFerranti) | MIT Licensed */'
          },
          files: [{
             expand: true,
             cwd: 'stylesheets/css/',
             src: ['*.css', '!*.min.css'],
             dest: 'stylesheets/css/',
             ext: '.min.css'
          }]
        }
      },
      watch: {
          css: {
              files: '**/*.scss',
              tasks: ['sass', 'cssmin']
          }
      }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default',[
    'cssmin'
  ]);
}