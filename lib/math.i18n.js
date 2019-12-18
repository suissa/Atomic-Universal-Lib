
const addProp = (lib, key, TRANSLATE) => {
  const L = {...lib}
  L[TRANSLATE[key]] = L[key]
  delete L[key]
  return L
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



module.exports = (genericLib, lang = 'pt-br') => {
  
  const TRANSLATE = (lang = 'pt-br') => LANGS[lang]
  // const MathLibPT = translateLib(genericLib, TRANSLATE())
  // const MathLibES = translateLib(genericLib, TRANSLATE('es'))

  return translateLib(genericLib, TRANSLATE(lang))

}