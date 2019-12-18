const replace = (str) => (from, to) => str.replace(from, to)
const getDiff = (c1, c2) => Math.abs(c1 - c2)

const getVal = (x) => (Number.isInteger(x)) 
  ? x
  : getTime(x)

const getPercent = (value, percent) => (value / 100 * Number(percent))

// const PERCENT = (self) => function(op = '+', x) {
//   self._value_ = Number(
//     (op === '+')
//       ? self._value_ + (self._value_ / 100 * Number(x))
//       : self._value_ - (self._value_ / 100 * Number(x))
//   )
//   console.log(self._value_)
//   return self
// }


// const PROPORTION = (self) => function(x) {
//   self._value_ = self._value_ / x
//   // console.log(self._value_, self._proportion, x)
//   return self
// }

const props =
  { _value_: 0, _proportion_: 0
  }

const init = function(x) {
  this._value_ = Number(x)
  return this
}

const plus = require('./atoms/math.plus')
const minus = require('./atoms/math.minus')
const percent = require('./atoms/math.percent')
const proportion =  require('./atoms/math.proportion')

const actions = {
  init,
  plus,
  minus,
  percent,
  proportion,
}
const getter = function() { return this._value_ }

module.exports = {
  props, actions, getter
}