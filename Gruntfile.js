module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks que o Grunt deve executar
      
	//min js
      uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {//primeiro o final depois o original
          'js/main.js' : [ 'js/scripts.js' ]
        }
      }
    }, 
      //sass
      sass : {
      dist : {
        options : { style : 'expanded' },
        files : {
          'css/style.css' : 'css/style.sass'
        }
      }
    }, 

    //hintjs
    jshint: {
    all: ['Gruntfile.js', 'js/scripts.js']
  },
    
    // watch
    watch : {
      dist : {
        files : [
          'js/**/*',
          'css/**/*'
        ],
        tasks : ['sass' , 'jshint']
      }
    } 


  });
   // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
 
  // Tarefas que serão executadas
   grunt.registerTask( 'go', [ 'uglify', 'sass' ] );
  // Tarefa para Watch
   grunt.registerTask( 'w', [ 'watch' ] );

};