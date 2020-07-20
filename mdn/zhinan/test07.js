// Regular_Expressions Indexed_collections Keyed_Collections

// var test = /ab+c/

// var teststr =  "Hi, do you know your abc's?";
// console.log(test.test(teststr))

// var hh = /[a-z]:\\/i
// console.log(hh.test('aaaazzz:\\'));

// var nonr = /(?:foo){1,2}/;
// var nonr1 = /(foo){1,2}/;

// var ss = 'faoossssfoofooddddd';
// console.log(ss.match(nonr));
// console.log(ss.match(nonr1));

// var re = /Jack(?=Sprat|Frost)/;
// var re1 = /(?<=Jack)Sprat/;
// var str1 = 'sssJackSpratssss';
// console.log(str1.match(re));
// console.log(re.exec(str1));

// console.log(str1.match(re1));

// console.log(/\d+(?!\.)/.exec("3.141"));

// console.log(/(?<!-)\d+/.exec('-333'));

// console.log(/[a-z.]+/.exec('test.i.ng'))

// console.log(/oon\b/.exec('moon\tsss'))
// console.log(/y\B../.exec('possibly yesterday'))

// console.log(/\cM/.exec())

// console.log(/\d/.exec('ssjsj2ss'));
// console.log(/\D+/.exec('ssjsj2ss'));

// console.log(/\s\w*/.exec('aaa hhh'))

// console.log(/apple(,)\sorange\1/.exec('apple, orange, cherry, peach.'))

// console.log(/<(\w+)>\w*<\/\1>/.exec('<span>hello</span>'))

// console.log(/(foo) (bar) \1 \2/.test("foo bar foo bar"));
// console.log(/(?:foo) (bar) \1/.exec("foo bar bar"));
// console.log(/(foo) (bar) \1 \2/.test("foo bar"));

// console.log(/a\*b/.exec('a*b'));

// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
//   //$&表示整个被匹配的字符串
// }
// const test = escapeRegExp('[abc]\\\\aaaaaa')
// console.log(new RegExp(test));

// console.log(/Chapter (\d+)\.\d*/.exec('Open Chapter 4.3, paragraph 6'));
// console.log(/Chapter (\d+)\.\d*/.exec('Open Chapter 4., paragraph 6'));
// console.log(/Chapter (\d+)\.\d*/.exec('Open Chapter 4, paragraph 6'));
// console.log(/d(b+)d/g.exec('cdbbdbsbzcdbbdbsbz'))
// console.log(/d(b+)d/.exec('cdbbdbsbzcdbbdbsbz'))
// console.log('cdbbdbsbzcdbbbdbsbz'.match(/d(b+)d/g))

// const re = /\w+\s/g
// const str = 'fee fi fo fum';
// console.log(str.match(re));

// const arr = re.exec(str);
// console.log(arr, re.lastIndex);

// let xArr;
// while(xArr = re.exec(str)) console.log(xArr);

// console.log(/\S+/.exec('foo!@#$ bare'));

// var numre = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;

// var num = '010-123-12345';
// console.log(numre.test(num));
// console.log(numre.exec(num));

// var arr = new Array(4);
// console.log(arr.length);
// for (let i in arr) {
//   console.log(i);
// }

// console.log(Object.keys(arr))
// console.log(Object.values(arr))

// var arr1 = Array(10.2, 2)
// console.log(arr1);
// var cats = ['Dusty', 'Misty', 'Twiggy'];
// console.log(cats.length); // 3

// cats.length = 2;
// console.log(cats);

// cats.length = 0;
// cats.length = 3;

// console.log(cats);
// cats[2] = 'p';
// for (let i in cats) {
//   console.log(i);
// }
// console.log(cats[0] === undefined);
// var array = ['first', 'second', , 'fourth'];

// // returns ['first', 'second', 'fourth'];
// array.forEach(function(element) {
//   console.log(element);
// })

// if(array[2] === undefined) { console.log('array[2] is undefined'); } // true

// for (let i in array) console.log(i);

// var arrayq = ['first', 'second', undefined, 'fourth'];
// for (let i in arrayq) console.log(i);

// Keyed_Collections

var saying = new Map();
saying.set('dog', 'woof');
saying.set('cat', 'meow');
saying.set('ele', 'toot');
console.log(saying.size);

// console.log(saying.get('fox'));
// console.log(saying.has('fox'));
// console.log(saying.has('dog'));
// console.log(saying.delete('dog'));
// console.log(saying.has('dog'));

for (var [key, value] of saying) {
  console.log(key + ':' + value);
}