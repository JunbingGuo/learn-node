function inherit(p) {
	if (p == null) throw TypeError();
	if (Object.create) {
		return Object.create(p);
	}
	var t = typeof p;
	if (t !== 'objiect' && t !== 'function') throw TypeError();
	function f() {};
	f.prototype = p;
	return new f();
}
function enumeration(namesToValues) {
	var enumeration = function() { throw "can't Instantitate Enumerations;"};
	var proto = enumeration.prototype = {
		constructor: enumeration,
		toString: function() { return this.name; },
		valueOf: function() { return this.value; },
		toJson: function() { return this.name; },
	};
	enumeration.values = [];
	for (name in namesToValues) {
		var e = inherit(proto);
		e.name = name;
		e.value = namesToValues[name];
		enumeration[name] = e;
		enumeration.values.push(e);
	}
	enumeration.foreach = function(f, c) {
		for (var i = 0; i < this.values.length; i ++) f.call(c, this.values[i]);
	};
	return enumeration;
}

var Coin = enumeration({
	Penny: 1,
	Nickel: 5,
	Dime: 10,
	Quarter: 25
});
// console.log(Coin);
console.log(typeof Coin);
var c = Coin.Dime;
console.log(typeof c);
console.log(c.toString());
console.log(c.valueOf());
