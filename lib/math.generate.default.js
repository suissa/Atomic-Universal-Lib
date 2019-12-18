const replace = (str) => (from, to) => str.replace(from, to)
const getDiff = (c1, c2) => Math.abs(c1 - c2)

const getVal = (x) => (Number.isInteger(x)) 
  ? x
  : getTime(x)

const props =
  { _value_: 0, _proportion_: 0
  }

const fs = require('fs')
let ATOMS_MODULES = {}

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
    ATOMS_MODULES[name] = require(`./${ATOMS_FOLDER}/${file}`)
})
console.log({ATOMS_MODULES})

const getModules = (actions, ATOMS, all = true) => 
  (all)
    ? actions
    : getFields(ATOMS, actions)

const actions = getModules(ATOMS_MODULES, ATOMS)
const getter = function() { return this._value_ }


module.exports = {
  props, actions, getter
}