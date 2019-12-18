const PERCENT = (self) => function(x, op = true) {
  self._value_ = (op === true)
    ? self._value_ / 100 * Number(x)
    : Number(
        (op === '+')
          ? self._value_ + (self._value_ / 100 * Number(x))
          : self._value_ - (self._value_ / 100 * Number(x))
      )
  return self
}

const percent = function(op = '+', x) {
  return PERCENT(this)(op, x)
}

module.exports = percent