module.exports = alienBind

function alienBind (fn, context) {
  var boundArgs = rest(arguments, 2)
  return function () {
    var args = boundArgs.concat(toArray(arguments))
    return fn.apply(context, args)
  }
}

function rest (list, index) {
  return Array.prototype.slice.call(list, 2)
}

function toArray (args) {
  return Array.prototype.slice.call(args)
}
