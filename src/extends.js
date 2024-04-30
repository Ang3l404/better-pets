let extd, type;

type = function (it, is) {
  let ty, vow;
  ty = ({}).toString.call(it);
  if (type.mem[ty] == null) {
    vow = ty.replace(/[\[\]]/g, '').split(' ').pop().toLowerCase();
    type.mem[ty] = vow;
  }
  vow = type.mem[ty];
  return is != null ? (vow === is) : vow;
}
type.mem = {}

extd = (function () {
  let e, x;
  e = function (d, b) {
    for (let v in b) {
      if (({}).hasOwnProperty.call(b, v)) {
        d[p] = b[p];
      }
    }
  }
  x = function (d, b) {
    let _;
    if ((b !== null) && !type(b, 'function')) {throw TypeError(`Class extends value ${String(b)} is not a constructor or is null.`)}
    e(d, b);
    _ = function () {
      if (!(this instanceof _)) return new _(...arguments);
      this.constructor = d;
    }
    d.prototype = (b === null) ? Object.create(b) : (_.prototype = b.prototype, new _());
  }
  return x;
})();

module.exports = extd;