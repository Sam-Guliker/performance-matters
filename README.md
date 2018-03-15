## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/). It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages).

Differences from actual Bootstrap documentation:

- Added custom webfont
- Removed third party scripts
- The src directory is served with [Express](https://expressjs.com/).
- Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/)

## Getting started

- Install dependencies: `npm install`
- Serve: `npm start`
- Expose localhost: `npm run expose`

## Performance Matters
In this file I'm working on making the documentation site of Bootstrap a bit faster.  

How am I going to to do this? :thinking:

* Compressing the css files.
* Compressing the JS files.
* Compressing images.
* Loading fonts async.  

I've made some branches which contain the the subjects of the list above.

I unfortunately have errors with my node modules.
![Errors](images/errors.png)
