const PROPORTION = (self) => function(x) {
  self._value_ = self._value_ / x
  // console.log(self._value_, self._proportion, x)
  return self
}

const proportion = function(x) {
  return PROPORTION(this)(x)
}

module.exports = proportion