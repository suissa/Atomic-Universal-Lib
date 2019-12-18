const PLUS = (self) => function(x, type = 'number') {
  self._value_ = (type === 'number')
    ? self._value_ + Number(x)
    : self._value_ + getPercent(self._value_, x)
  return self
}

const plus = function(x, type = 'number') {
  return PLUS(this)(x, type)
}

module.exports = plus