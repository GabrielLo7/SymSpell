#! /usr/local/bin/node
var SpellChecker = require('./symspell.js');

function tokenizer(words){
    return words.toLowerCase().split(' ');
}

var maxEditDistance = 4;

var corrector = new SpellChecker(maxEditDistance);

corrector.addWords('awesome hallelujah different 测试 你好', null, tokenizer);

console.log(corrector.lookup('awsom'));
console.log(corrector.lookup('haleluah'));
console.log(corrector.lookup('difrent'));
console.log(corrector.lookup('测'));
console.log(corrector.lookup('你坏'));