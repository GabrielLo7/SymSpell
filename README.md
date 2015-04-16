Forked from Isaac Sukin's [SymSpell](https://github.com/IceCreamYou/SymSpell)

An implementation of the Symmetric Delete spelling correction algorithm.
It is fast and language-independent, but there is some setup cost to construct
the dictionary.

Currently the results are not as accurate as expected; there are probably some
bugs in the port.

Based on [C# code](http://blog.faroo.com/2012/06/24/1000x-faster-spelling-correction-source-code-released/)
and [algorithm](http://blog.faroo.com/2012/06/07/improved-edit-distance-based-spelling-correction/)
version 1.6, originally written by Wolf Garbe.

License: [LGPL 3.0](http://www.opensource.org/licenses/LGPL-3.0)


```js
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
```
