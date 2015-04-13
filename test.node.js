#! /usr/local/bin/node
var SpellChecker = require('./symspell.js');

var corrector = new SpellChecker(4, 2);
corrector.addWords('awesome hallelujah different');
console.log(corrector.lookup('awsom'));
console.log(corrector.lookup('haleluah'));
console.log(corrector.lookup('difrent'));