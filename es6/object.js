// var obj = {
//   1: 'a',
//   3.2: 'b',
//   1e2: true,
//   1e-2: true,
//   .234: true,
//   0xFF: true
// };
// console.log(obj[1])
// console.log(obj['1'])

// var o1 = {};
// var o2 = o1;

// o1 = 1;
// console.log(o2)

// var x = 1;
// var y = x;

// x = 2;
// console.log(y) // 1

// Object.prototype.print = function () {
//   console.log(this);
// };
// Object.print();
// Object.print = function() {
//   console.log(this);
// }
// var obj = new Object();
// obj.print() // Object

// var obj = Object();
// console.log(obj)

// console.log(obj instanceof null)

// const obj = Object(undefined);
// const obj = Object(null);
// const obj = Object();
// console.log(obj)
// 是否是对象
// function isObject(value) {
//   return value === Object(value)
// }

// function aa() {}
// console.log(isObject(aa))

// a = ['a', 'b']
// console.log(Object.getOwnPropertyNames(a));

// const obj = {
//   a: 1
// }
// console.log(obj.valueOf() === obj);
// console.log(obj.valueOf())

// console.log(obj.toString())

// function getType(o) {
//   const s = Object.prototype.toString.call(o);
//   return s.match(/\[object (.*?)\]/)[1].toLowerCase();
// }

// console.log(getType(1))
// console.log(getType('a'))
// console.log(getType([1, 2, 3]))
// console.log(getType(Date))
// console.log(getType(undefined))
// console.log(getType(null))

// const date = new Date();
// console.log(date.toString())
// console.log(date.toLocaleString())

// const obj = {
//   a: 1
// }

// console.log(obj.hasOwnProperty('a'))
// console.log(obj.hasOwnProperty('toString'))



/* function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.showName = function() {
  console.log(this.name);
}
User.prototype.showAge = function() {
  console.log(this.age);
}

var user1 = new User('hello', 20);
user1.showAge()
user1.showName();

function VipUser(name, age, level) {
  User.call(this, name, age);
  this.level = level;
}

VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;
VipUser.prototype.showLevel = function() {
  console.log(this.level);
}

var vip1 = new VipUser('ming', 32, 'a')
vip1.showLevel();
vip1.showAge();
vip1.showName(); */

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
//   showAge() {
//     console.log(this.age);
//   }
// }

// var user = new User('bing', 30);
// user.showName();
// user.showAge();

// class SuperUser extends User{
//   constructor(name, age, level) {
//     super(name, age);
//     this.level = level;
//   }
//   showLevel() {
//     console.log(this.level);
//   }
// }

// var su = new SuperUser('tang', 24, 'b');
// su.showName();
// su.showAge();
// su.showLevel();