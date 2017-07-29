var gulp   = require('gulp');
var source = require('vinyl-source-stream')
var util   = require('gulp-util');
var str    = require('string-to-stream');
var babelify = require('babelify');


gulp.task('watch', function(){
  gulp.watch(['./clientReact/*.jsx'], ['react'])
  gulp.watch(['./server/public/styles/*.less'], ['compile-less'])
  // gulp.watch("./server/views/*.html").on('change', browserSync.reload);
})


gulp.task('react', function(){

  return browserify({
            entries: './clientReact/app.jsx',
            extensions: ['.jsx'],
            debug: true
          })
          .transform('babelify', {presets: ["react", "es2015"]})

          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./server/public'))
})

gulp.task('compile-less', function(){
  gulp.src('./server/public/styles/main.less')
  .pipe(less())
  .pipe(gulp.dest('./server/public/styles'));
})


gulp.task('default', ['compile-less', 'react', 'watch'])









// WRite a task that creates a component file,
// and creates the skeleton for an es6 react component

gulp.task('comp', () => {

  // Get the name of the file
  // ex. gulp comp --varName 'User'
  var fileName = util.env.varName.toString();

  str(createReactClass(fileName))
    .pipe(source(fileName + "Component.js"))
    .pipe(gulp.dest('./clientReact'))

})



function createReactClass(className){
  // using template strings
  let Component = `const React = require("react")

class ${className} extends React.component {
  constructor(props) {
    super(props);

    // this is getInitialState
    this.state = {
      someValue: ''
    }
    // binding this method to the instatiated object

    this.handleClick = this.handleClick.bind(this)

  }
  handleClick(){
    // inside of here this is not automatically binded
  }
  render() {
    return (

      )
  }
}
  `

  return Component;
}









