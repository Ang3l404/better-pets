let entity;
/**
 * @name entity
 * @description Entity base class to control important information and to work off of.
 * @param {Number} x - the location on the x axis.
 * @param {Number} y - the location on the y axis.
 * @param {Number} w - Width - the size on the x axis.
 * @param {Number} h - Height - the size on the y axis.
 * @param {String} n - Name - the internal name of the Entity.
 * @param {String} l - Label - the external name of the Entity.
 */
entity = function (x, y, w, h, n, l) {
  if (!(this instanceof entity)) return new entity(...arguments);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.n = n;
  this.l = l;
  this.index = entity.entities.length;
  entity.entities.push(this);
  return this;
}
entity.prototype = {
  constructor: entity,
  get location () {
    return {x: this.x, y: this.y}
  },
  set location (loc) {
    this.x = loc.x;
    this.y = loc.y ?? this.x;
  },

  get size () {
    return {width: this.w, height: this.h}
  }, set size (size) {
    this.w = size.w ?? size.width;
    this.h = size.h ?? size.height ?? this.w;
  },

  get name () {
    return this.n
  }, set name (x) {
    this.n = x;
  },

  get label () {
    return this.l
  }, set label (x) {
    this.l = x;
  },

  get hasUpdate () {
    return this['update'] != null;
  },
  get hasDraw () {
    return this['draw'] != null;
  }
}
entity.entities = [];