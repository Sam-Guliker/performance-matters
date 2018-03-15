var gulp = require('gulp')
var critical = require('critical')

gulp.task('critical', function(){
  
  critical.generate({
    base: './src/',
    src: '_/base/layout1.html',
    dest: '_/base/layout.html',
    inline: true,
    minify: true,
    dimensions: [{
      height: 200,
      width: 500
    }, {
      height: 900,
      width: 1200
    }]
  })

})
