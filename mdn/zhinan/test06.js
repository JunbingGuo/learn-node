// Numbers_and_dates 未练习方法
// Text_formatting 未练习方法

// var s = new String('foo');
// console.log(s)
// console.log(s.toString())

// var numObj = 7.71234;
// console.log(numObj.toExponential(2))
// console.log(numObj.toExponential(3))
// console.log(numObj.toExponential(4))
// console.log(numObj.toExponential(20))
// console.log(numObj.toExponential())
// var numObj = 12345.6789;
// console.log(numObj.toFixed())
// console.log(numObj.toFixed(1))
// console.log(numObj.toFixed(2))
// console.log(numObj.toFixed(3))
// console.log(numObj.toFixed(4))
// console.log(numObj.toFixed(5))

// -2.34.toFixed(1);         // 返回 -2.3 （由于操作符优先级，负数不会返回字符串）,先进行toFixed(1),然后取负号

// (-2.34).toFixed(1);       // 返回 "-2.3" （若用括号提高优先级，则返回字符串）

// var numNe = -2.34
// console.log(numNe.toFixed(1))
// console.log(typeof numNe.toFixed(1))

// var tempNum = -10;
// console.log(tempNum.toString())
// console.log(tempNum.toString(2))

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// setInterval(() => {
//   console.log(getRandomInt(10))
// }, 1000);
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min; 
// }

// 0.1 + 0.2 == 0.3;    //false

// function equal(v1, v2) {
//   return Math.fround(v1) == Math.fround(v2);
// }

// equal(0.1 + 0.2, 0.3);   //true

// console.log(Math.clz32(1))

// var clz = Math.clz32;
// function ctrz(integer){ // 计算尾随0个数
//     // 1. 将第一个1之后的高数位全部置为1
//     // 00000000000000001000000000001000 => 11111111111111111111111111111000
//     integer |= integer << 16;
//     integer |= integer << 8;
//     integer |= integer << 4;
//     integer |= integer << 2;
//     integer |= integer << 1;
//     // 2. 然后，对该数取反，此时低位的1的个数即为所求
//     return 32 - clz(~integer) |0; // `|0`用于保证结果为整数
// }

// console.log((8).toString(2));
// console.log(ctrz(14));

var str = 'A \uD87E\uDC04 Z';
// console.log(str);
// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(3));
// console.log(str.charAt(4));
// console.log(str.charAt(5));
/* var str = 'A \uD87E\uDC04 Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  } // Adapt this line at the top of each loop, passing in the whole string and
    // the current iteration and returning a variable to represent the 
    // individual character

  console.log(chr);
}

function getWholeChar (str, i) {
  var code = str.charCodeAt(i);     
 
  if (isNaN(code)) {
    return ''; // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) { 
    if (str.length <= (i+1))  {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i+1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i)+str.charAt(i+1);
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i-1);
  
  // (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 > prev || prev > 0xDBFF) { 
    throw 'Low surrogate without preceding high surrogate';
  }
  // We can pass over low surrogates now as the second component
  // in a pair which we have already processed
  return false; 
} */

// console.log('hello world'.indexOf('')) // 返回 0
// console.log('hello world'.indexOf('', 0)) // 返回 0
// console.log('hello world'.indexOf('', 3)) // 返回 3
// console.log('hello world'.indexOf('', 8)) // 返回 8

// 'hello world'.indexOf('', 11) // 返回 11
// 'hello world'.indexOf('', 13) // 返回 11
// 'hello world'.indexOf('', 22) // 返回 11

// console.log('canal'.lastIndexOf('a', 2))
// console.log('canal'.lastIndexOf('a', 0))
// console.log('canal'.lastIndexOf('a', -1))
// console.log('canal'.lastIndexOf('c', -1))
// console.log('canal'.lastIndexOf('', -1))

// var anyString = "Mozilla";

// 输出 "Moz"
// console.log(anyString.substring(0,3));
// console.log(anyString.substring(3,0));
// console.log(anyString.substring(3,-3));
// console.log(anyString.substring(3,NaN));
// console.log(anyString.substring(-2,3));
// console.log(anyString.substring(NaN,3));
// console.log(anyString.substring('a', 3));
// console.log(anyString.substring(anyString.length - 4));
// console.log(anyString.substring(anyString.length - 5));

// var str = "abcdefghij";

// console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
// console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
// console.log("(-3): "     + str.substr(-3));    // (-3): hij
// console.log("(1): "      + str.substr(1));     // (1): bcdefghij
// console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
// console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):

// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);

// console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。

// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var regexp = /[A-E]/gi;
// var matches_array = str.match(regexp);

// console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// var str = "Nothing will come of nothing.";

// console.log(str.match());   // returns [""]
// console.log(str.match(/[\d]/));   // null

// var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
//     str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
//     str3 = "The contract was declared null and void.";
// console.log(str1.match("number"));   // "number" 是字符串。返回["number"]
// console.log(str1.match(NaN));        // NaN的类型是number。返回["NaN"]
// console.log(str1.match(Infinity));   // Infinity的类型是number。返回["Infinity"]
// console.log(str1.match(+Infinity));  // 返回["Infinity"]
// console.log(str1.match(-Infinity));  // 返回["-Infinity"]
// console.log(str2.match(65));         // 返回["65"]
// console.log(str2.match(+65));        // 有正号的number。返回["65"]
// console.log(str3.match(null));       // 返回["null"]

// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   console.log(match, offset, p1, p2, p3)
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%qq1111'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);  // abc - 12345 - #$*%

// var re = /apples/gi;
// var str = "Apples are round, and apples are juicy.";
// var newstr = str.replace(re, "oranges");

// // oranges are round, and oranges are juicy.
// console.log(newstr);

// var re = /(\w+)\s(\w+)/;
// var str = "@@@John Smith!!!";
// var newstr = str.replace(re, "$2 $1");
// // Smith, John
// console.log(newstr);

// console.log(str.replace(re, '$` 哈哈哈'))
// console.log(str.replace(re, "$' 哈哈哈"))

// var str1 = 'abc123weee,qqq';
// var re1 = /^([\d]*)/
// var tStr = str1.replace(re1, ' $& ');
// console.log(tStr);

// function styleHyphenFormat(propertyName) {
//   function upperToHyphenLower(match) {
//     return '-' + match.toLowerCase();
//   }
//   return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
// }
// console.log(styleHyphenFormat('HelloWorld'));

// var newString = 'HelloWorld'.replace(/[A-Z]/g, ('-' + '$&').toLowerCase());  // won't work
// console.log(newString);

var str = 'x-x__x_x___x___x___';
var retArr = [];
str.replace(/(x_*)|(-)/g, function(match, p1, p2) {
  console.log(p1, p2)
  if (p1) { retArr.push({ on: true, length: p1.length }); }
  if (p2) { retArr.push({ on: false, length: 1 }); }
});

console.log(retArr);