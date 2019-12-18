const replace = (str) => (from, to) => str.replace(from, to)
const getDiff = (c1, c2) => Math.abs(c1 - c2)

const getVal = (x) => (Number.isInteger(x)) 
  ? x
  : getTime(x)

const getPercent = (value, percent) => (value / 100 * Number(percent))

const PERCENT = (self) => function(op = '+', x) {
  self._value_ = Number(
    (op === '+')
      ? self._value_ + (self._value_ / 100 * Number(x))
      : self._value_ - (self._value_ / 100 * Number(x))
  )
  console.log(self._value_)
  return self
}

const PLUS = (self) => function(x, type = 'number') {
  self._value_ = (type === 'number')
    ? self._value_ + Number(x)
    : self._value_ + getPercent(self._value_, x)
  return self
}

const MINUS = (self) => function(x, type = 'number') {
  self._value_ = (type === 'number')
    ? self._value_ + Number(x)
    : self._value_ - getPercent(self._value_, x)
  return self
}


const PROPORTION = (self) => function(x) {
  self._value_ = self._value_ / x
  // console.log(self._value_, self._proportion, x)
  return self
}


const MathLib2 = {
  _value_: 0,
  _proportion_: 0,
  init: function(x) {
    this._value_ = Number(x)
    return this
  },
  plus: function(x, type = 'number') {
    return PLUS(this)(x, type)
  },
  minus: function(x, type = 'number') {
    return MINUS(this)(x, type)
  },
  percent: function(op = '+', x) {
    return PERCENT(this)(op, x)
  },
  proportion: function(x) {
    return PROPORTION(this)(x)
  },
  get calc() { return this._value_ }
}

const addProp = (lib, key, TRANSLATE) => {
  lib[TRANSLATE[key]] = lib[key]
  return lib
}

const addGetter = (lib, key, TRANSLATE) =>      
  Object.defineProperty(
    lib, 
    TRANSLATE[key], 
    { get: function() { return this._value_ } }
  )

const translateLib = (libBase, TRANSLATE) => 
  Object.keys(TRANSLATE).reduce((lib, key) => 
    (key === 'calc')
      ? addGetter(lib, key, TRANSLATE)
      : addProp(lib, key, TRANSLATE)
  , libBase)

const ptBR = {
  plus: 'mais',
  minus: 'menos',
  percent: 'porcentagem',
  calc: 'calcule',
}

const es = {
  plus: 'maisCabron',
  minus: 'menosCabron',
  percent: 'porcentagemCabron',
  calc: 'calculeCabron',
}

const LANGS = {
  'pt-br': ptBR,
  es
}

const TRANSLATE = (lang = 'pt-br') => LANGS[lang]
const MathLibPT = translateLib(MathLib2, TRANSLATE())
const MathLibES = translateLib(MathLib2, TRANSLATE('es'))

// console.log(
//   MathLibPT
//     .init('50')
//     .mais(50)
//     .mais(10, '%')
//     .menos(10, '%')
//     .calcule
// )

console.log(
  MathLibPT
    .init('50')
    .mais(50)
    .proportion(10)
    .calcule
)

// console.log(
//   MathLibES
//     .init('50')
//     .maisCabron(50)
//     .maisCabron(10, '%')
//     .menosCabron(10, '%')
//     .calculeCabron
// )