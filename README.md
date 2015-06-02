Alien Bind
==========

An implementation of `bind` that does not use `Function.prototype.bind` (alien being the opposite of native).

Motivation
----------
Many libraries such as [underscore.js](http://underscorejs.org/) use the native bind function from `Function.prototype` however some people (ಠ_ಠ [MooTools](http://mootools.net/)) like to overwrite this with a version that only works partially. Use this to be confident that `bind` will work as expected.

Installation
------------
```bash
npm install alien-bind
```

Usage
-----
Example shamelessly stolen from [underscore.js](http://underscorejs.org/#bind).

```javascript
var bind = require('alien-bind')
var func = function (greeting){ return greeting + ': ' + this.name }
func = bind(func, {name: 'moe'}, 'hi')
func()
// => 'hi: moe'
```

Compatibility
-------------
Tests pass in
* IE8+
* Chrome
* Firefox
* Opera
