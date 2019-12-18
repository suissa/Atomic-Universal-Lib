const replace = (str) => (from, to) => str.replace(from, to)
const getDiff = (c1, c2) => Math.abs(c1 - c2)

const getVal = (x) => (Number.isInteger(x)) 
  ? x
  : getTime(x)

const props =
  { _value_: 0, _proportion_: 0
  }

const fs = require('fs')
let actions = {}

const ATOMS_FOLDER = 'atoms'

const ATOMS = [
  'init',
  'plus',
  'minus',
  'percent',
  // 'proportion',
]

const getFields = (fields, data) => 
  Object.fromEntries(
    Object.entries(data)
          .filter(d => fields.includes(d[0]))
  )

fs.readdirSync(`./atoms/`).forEach((file, i) => {
    const name = file.replace('.js', '').replace('math.', '')
    actions[name] = require(`./${ATOMS_FOLDER}/${file}`)
})
console.log({actions})

const getModules = (actions, ATOMS, all = true) => 
  (all)
    ? actions
    : getFields(ATOMS, actions)

const LIB = getModules(actions, ATOMS, false)
console.log({LIB})

const getter = function() { return this._value_ }

module.exports = {
  props, actions, getter
}