module.exports = function lomega () {
  var args = Array.prototype.slice.call(arguments)
  args.forEach(function (arg) {
    console.log(arg)
  })
}
