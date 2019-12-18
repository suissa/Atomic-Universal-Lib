const MINUS = (self) => function(x, type = 'number') {
  self._value_ = (type === 'number')
    ? self._value_ - Number(x)
    : self._value_ - getPercent(self._value_, x)
  return self
}

const minus = function(x, type = 'number') {
    return MINUS(this)(x, type)
  }

module.exports = minus