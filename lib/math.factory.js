const createLib = ({props, actions, getter}) => //console.log({props, actions, getter})
  Object.defineProperty(
    Object.assign( {}, props, actions ),
    'calc', 
    { get: getter }
  )

const genericLib = createLib(require('./math.generate.lib'))
console.log({genericLib})

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

// const translateLib = (libBase, TRANSLATE) => 
//   Object.keys(TRANSLATE).reduce((lib, key) => 
//     (key === 'calc')
//       ? addGetter(lib, key, TRANSLATE)
//       : addProp(lib, key, TRANSLATE)
//   , libBase)

// const ptBR = {
//   plus: 'mais',
//   minus: 'menos',
//   percent: 'porcentagem',
//   calc: 'calcule',
// }

// const es = {
//   plus: 'maisCabron',
//   minus: 'menosCabron',
//   percent: 'porcentagemCabron',
//   calc: 'calculeCabron',
// }

// const LANGS = {
//   'pt-br': ptBR,
//   es
// }

// const TRANSLATE = (lang = 'pt-br') => LANGS[lang]
// const MathLibPT = translateLib(genericLib, TRANSLATE())
// const MathLibES = translateLib(MathLib2, TRANSLATE('es'))

console.log(
  genericLib
    .init('50')
    .plus(50)
    .minus(20)
    .percent(10, '+')
    // .proportion(88)
    .calc
)

// console.log(
//   MathLibPT
//     .init('50')
//     .mais(50)
//     .menos(10)
//     .porcentagem(10)
//     .calcule
// )

// console.log(
//   MathLibES
//     .init('50')
//     .maisCabron(50)
//     .maisCabron(10, '%')
//     .menosCabron(10, '%')
//     .calculeCabron
// )