const createLib = ({props, actions, getter}) =>
  Object.defineProperty(
    Object.assign( {}, props, actions ),
    'calc', 
    { get: getter }
  )

const genericLib = createLib(require('./math.generate.default'))
const genericLibPortugues = require('./math.i18n')(genericLib)
console.log({genericLibPortugues})

console.log(
  genericLib
    .init('50')
    .plus(50)
    .minus(20)
    .percent(10, '+')
    // .proportion(88)
    .calc
)

console.log(
  genericLibPortugues
    .init('50')
    .mais(50)
    .menos(10)
    .porcentagem(10)
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