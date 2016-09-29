// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
nebula = require('bespoke-theme-nebula'),
keys = require('bespoke-keys'),
touch = require('bespoke-touch'),
bullets = require('bespoke-bullets'),
backdrop = require('bespoke-backdrop'),
scale = require('bespoke-scale'),
hash = require('bespoke-hash'),
progress = require('bespoke-progress');

// Bespoke.js
var deck = bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets('ul:not(.no-bullets) li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

var footer = document.getElementById('footer');
var jsLogoWhite = document.getElementById('js-logo-white-footer');
var jsLogoBlack = document.getElementById('js-logo-black-footer');

deck.on('activate', function(event) {
  if (event.slide.className.startsWith('black')) {
    jsLogoWhite.classList.add('show');
    jsLogoWhite.classList.remove('hide');

    jsLogoBlack.classList.add('hide');
    jsLogoBlack.classList.remove('show');

    event.slide.parentElement.classList.add('black');
    event.slide.parentElement.classList.remove('white');
  } else if (event.slide.className.startsWith('white')) {
    jsLogoBlack.classList.add('show');
    jsLogoBlack.classList.remove('hide');

    jsLogoWhite.classList.add('hide');
    jsLogoWhite.classList.remove('show');

    event.slide.parentElement.classList.add('white');
    event.slide.parentElement.classList.remove('black');
  }
});

deck.on('activate', function(event) {
  if (event.index === (0)) {
    footer.classList.add('hide');
    footer.classList.remove('show');
  } else if (event.index === (1)) {
    footer.classList.add('hide');
    footer.classList.remove('show');
  } else {
    footer.classList.add('show');
    footer.classList.remove('hide');
  }
});
