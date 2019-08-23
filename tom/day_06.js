// 深入理解JavaScript系列（6）：S.O.L.I.D五大原则之单一职责SRP
// function PersonX() {
//     'use strict'
//     this.age = 0;
//     var closure = "123"
//     setInterval(()=>{
//       this.age++;
//       console.log(closure, this.age)
//     }, 1000);
//   }
  
//   var px = new PersonX();

// function Person() {
//     this.age = 0;
//     var closure = "123"
//     setInterval(function() {
//       this.age++;
//       console.log(closure, this.age);
//     }, 1000);
//   }
  
//   var p = new Person();

// class Point {
//   constructor(x, y) {
//     // ...
//   }

//   toString() {
//     // ...
//   }
// }
// Point.prototype.test = function() {};
// const aaa = new Point();
// console.log(aaa.__proto__ === Point.prototype);
// console.log(aaa.constructor.prototype === Point.prototype);
// console.log(Object.keys(Point.prototype));
// // []
// console.log(Object.getOwnPropertyNames(Point.prototype));
// ["constructor","toString"]
// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }
// const test = new Foo();
// console.log(test.constructor, Foo.prototype.constructor);
// console.log(test instanceof Foo);

// class MyClass {
//   constructor() {
//     // ...
//   }
//   get prop(val) {
//     return val;
//   }
//   set prop(value) {
//     console.log('setter: '+ value);
//   }
// }

// let inst = new MyClass();

// inst.prop = 123;
// // setter: 123

// console.log(inst.prop)

// class Logger {
//   constructor() {
//     this.printName = this.printName.bind(this);
//   }
//   printName(name = 'there') {
//     this.print(`Hello ${name}`);
//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName(); // TypeError: Cannot read property 'print' of undefined

// class Foo {
//   static bar() {
//     this.baz();
//   }
//   static baz() {
//     console.log('hello');
//   }
//   baz() {
//     console.log('world');
//   }
// }

// Foo.bar() // hello

// class Son extends Foo {

// }
// Son.bar();
// class Incresing {
//   _count = 0;
//   // constructor() {
//   //   this._count = 0;
//   // }
//   static Mycount = 1;
//   get value() {
//     console.log('the value is:', this._count);
//     return this._count;
//   }
//   increse() {
//     this._count++;
//   }
// }

// const c = new Incresing();
// c.increse();
// console.log(c.value);
// console.log(Incresing.Mycount);


// class Widget {
//   // snaf = 2;
//   foo (baz) {
//     bar.call(this, baz);
//   }

//   // ...
// }

// function bar(baz) {
//   return this.snaf = baz;
// }

// const w = new Widget();
// console.log(w.foo(123), w.snaf);
// console.log(w.bar(123));
// class IncreasingCounter {
//   #count = 0;
//   get value() {
//     console.log('Getting the current value!');
//     return this.#count;
//   }
//   increment() {
//     this.#count++;
//   }
// }

// const count = new IncreasingCounter();

// // console.log(count.#count);
// console.log(count.value);


// function Person(name) {
//   if (new.target !== undefined) {
//     console.log(new.target);
//     this.name = name;
//     console.log(name);
//   } else {
//     throw new Error('必须使用 new 命令生成实例');
//   }
// }

// // 另一种写法
// function Person(name) {
//   if (new.target === Person) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用 new 命令生成实例');
//   }
// }

// var person = new Person('张三'); // 正确
// var notAPerson = Person.call(person, '张三');  // 报错

// class Rectangle {
//   constructor(length, width) {
//     console.log(new.target);
//     console.log(new.target === Rectangle);
//     this.length = length;
//     this.width = width;
//   }
// }
// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//   }
// }
// var obj = new Rectangle(3, 4); // 输出 true
// var oo = new Square(3, 4);

// class Point {
// }

// class Cpoint extends Point {
//   constructor() {}
// }

// const p = new Cpoint();
// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     super(x, y); // 调用父类的constructor(x, y)
//     this.color = color;
//   }

//   toString() {
//     return this.color + ' ' + super.toString(); // 调用父类的toString()
//   }
// }



// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static hello() {
//     console.log('hello');
//   }
// }

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     // this.color = color; // ReferenceError
//     super(x, y);
//     this.color = color; // 正确
//   }
// }
// const p = new ColorPoint(1,2,3);
// ColorPoint.hello();

// class A {
//   constructor() {
//     this.x = 3;
//   }
//   p() {
//     return 2;
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     console.log(super.p()); // 2
//   }
//   get m() {
//     return super.p;
//   }
// }

// let b = new B();
// console.log(b.m);
// console.log(A.prototype.p);
// console.log(A.prototype.x);

var Cc = function() {}

console.log(Cc.__proto__);

var test = new Cc();

console.log(test.__proto__);
class A {
}

class B extends A {
}

console.log(B.__proto__ === A) // true
console.log(B.prototype.__proto__ === A.prototype) // true
console.log(A.__proto__);