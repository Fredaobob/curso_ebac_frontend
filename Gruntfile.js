module.exports = function(grunt) {
  grunt.initConfig({
      less: {
          development: {
              files: {
                  'dev/styles/main.css': 'src/styles/main.less'
              }
          }
      },
      uglify: {
          build: {
              files: {
                  'dev/scripts/script.min.js': ['src/scripts/script.js']
              }
          }
      },
      replace: {
          updatePaths: {
              options: {
                  patterns: [
                      {
                          match: 'ENDERECO_DO_CSS',
                          replacement: './styles/main.css'
                      },
                      {
                          match: 'ENDERECO_DO_JS',
                          replacement: './scripts/script.min.js'
                      }
                  ]
              },
              files: [
                  {
                      expand: true,
                      flatten: true,
                      src: ['src/index.html'],
                      dest: 'dev/'
                  }
              ]
          }
      }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-replace')

  grunt.registerTask('default', ['less', 'uglify', 'replace:updatePaths'])
}
