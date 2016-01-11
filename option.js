module.exports = (function() {
  function Option(val) {
    this.val = val;
  }

  Option.prototype.get = function() {
    if(this.val === null || this.val === undefined)
      throw new TypeError("None.get");
    return this.val
  }

  Option.prototype.getOrElse = function(x) {
    if(this.val === null || this.val === undefined)
      return x;
    return this.val;
  };

  Option.prototype.getOrUndefined = function() {
    if(this.val === null || this.val === undefined)
      return undefined;
    return this.val;
  };

  Option.prototype.map = function(func) {
    if(this.val === null || this.val === undefined)
      return this;
    return new Option(func(this.val));
  }

  Option.prototype.match = function(case_some, case_none) {
    if(this.val === null || this.val === undefined)
      return new Option(case_none(this));
    return new Option(case_some(this));
  }

  var option = function(val) {
    if(typeof(val) === 'function') {
      try {
        return new Option(val());
      } catch(e) {
        return new Option(undefined);
      }
    }
    if(val instanceof Option) {
      return Option;
    }
    return new Option(val);
  }
  
  return option;
})();
