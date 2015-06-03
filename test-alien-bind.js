/* global describe, it, expect, beforeEach, afterEach */
var sinon = require('sinon')

describe('bind', function () {
  var bind

  beforeEach(function () {
    sinon.spy(Function.prototype, 'bind')
    bind = require('./alien-bind')
  })

  afterEach(function () {
    Function.prototype.bind.restore()
  })

  it('should not use the native bind function', function () {
    var context = symbol('context')

    bind(introspection, context)()

    expect(Function.prototype.bind.callCount).to.be(0)
  })

  it('should bind the first argument as context', function () {
    var context = symbol('context')

    var internals = bind(introspection, context)()

    expect(internals.this).to.be(context)
    expect(internals.args.length).to.be(0)
  })

  it('should accept no bound arguments', function () {
    var context = symbol('context')
    var arg0 = symbol('arg0')

    var internals = bind(introspection, context)(arg0)

    expect(internals.this).to.be(context)
    expect(internals.args.length).to.be(1)
    expect(internals.args[0]).to.be(arg0)
  })

  it('should bind the rest of the arguments as arguments', function () {
    var context = symbol('context')
    var arg0 = symbol('arg0')
    var arg1 = symbol('arg1')

    var internals = bind(introspection, context, arg0, arg1)()

    expect(internals.this).to.be(context)
    expect(internals.args.length).to.be(2)
    expect(internals.args[0]).to.be(arg0)
    expect(internals.args[1]).to.be(arg1)
  })

  it('should concat the rest of the arguments with arguments passed', function () {
    var context = symbol('context')
    var arg0 = symbol('arg0')
    var arg1 = symbol('arg1')
    var arg2 = symbol('arg2')

    var internals = bind(introspection, context, arg0)(arg1, arg2)

    expect(internals.this).to.be(context)
    expect(internals.args.length).to.be(3)
    expect(internals.args[0]).to.be(arg0)
    expect(internals.args[1]).to.be(arg1)
    expect(internals.args[2]).to.be(arg2)
  })
})

function introspection () {
  return {
    this: this,
    args: arguments
  }
}

function symbol (name) {
  return {
    id: Math.random(),
    name: name
  }
}
