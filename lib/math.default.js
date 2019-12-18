const replace = (str) => (from, to) => str.replace(from, to)
const getDiff = (c1, c2) => Math.abs(c1 - c2)

const getVal = (x) => (Number.isInteger(x)) 
  ? x
  : getTime(x)

const props =
  { _value_: 0, _proportion_: 0
  }


const ATOMS = [
  'init',
  'plus',
  'minus',
  'percent',
  'proportion',
]

const init = require('./atoms/math.init')
const plus = require('./atoms/math.plus')
const minus = require('./atoms/math.minus')
const percent = require('./atoms/math.percent')
const proportion =  require('./atoms/math.proportion')

const actions = ATOMS.reduce((lib, atom) => 
  Object.assign(lib, {
    [atom]: require('./atoms/math.'+atom)
  }) , {})

const getter = function() { return this._value_ }

module.exports = {
  props, actions, getter
}