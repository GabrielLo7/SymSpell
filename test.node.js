#! /usr/local/bin/node
var assert = require('assert');
var SpellChecker = require('./symspell.js');

function tokenizer(words){
    return words.toLowerCase().split(' ');
}

var maxEditDistance = 4;

var corrector = new SpellChecker(maxEditDistance);

corrector.addWords('adapt adept adopt appraise apprise 暴露 毕恭毕敬', null, tokenizer);

console.log(corrector.lookup('adept'));
console.log(corrector.lookup('apprese'));

assert.equal(corrector.lookup('adept').length, 3);

console.log(corrector.lookup('曝露'));
console.log(corrector.lookup('必恭必敬'));

assert.equal(corrector.lookup('曝露')[0].term, '暴露')
assert.equal(corrector.lookup('必恭必敬')[0].distance, 2)