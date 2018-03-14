# Performance matters

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

## Image compression
De image compression safes 50% of the total image size :thinking:

## Css compression
Css compression was almost 25% compressed the css. :thinking:

## Js compression
Js compression saves 51% :thinking:
![](js_compression.png)

## Testing the site on 200kb.
Why do I test it on 200kb? I can clearly see what takes a long time to load.
When u know this u can take the next steps to give the user a nice experience.  

Uncompressed loading speed
![](uncompressed.png)  

Compressed loading speed 10s. :open_mouth:
![](compression.png)

## Conclusion.
After deployment make sure you can compress your files for beter :fire:performance:fire:
