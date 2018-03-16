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

# Audit
In this document I will tell abit about compression and how much it
affects the performance. :smile:  
De master branch is het gene waar ik niks heb aangepast.  
Bij de javascript branch zit ook de image en css compression.  

## How will I start?
How am I going to to do this? :thinking:

* Compressing the css files.
* Compressing the JS files.
* Compressing images.
* Loading fonts async.  

I've made some branches which contain the the subjects of the list above.

## Results
The combined results gave me on 200kb 10s loading speed
instead of 40. :mouth_open:  

Uncompressed loading speed 40s.
![uncompressed](uncompressed.png)  

Compressed loading speed 10s.  
![compression](compression.png)

## NPM errors
I unfortunately have errors with my node modules.
![Errors](errors.png)

## Conclusion.
After deployment make sure you can compress your files for beter :fire:performance:fire:

## Audit
[Audit link](audit.md)
