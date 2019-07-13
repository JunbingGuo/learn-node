// var stringReg = /(['"])[^'"]*\1/;
// console.log(stringReg.test("'sss'"));
// var reg = /\sjava\s/;
// console.log(reg.test(' java '));
// var reg1 = /\bjava\b/;
// console.log(reg1.test('sjava '));
// var reg2 = /\Bjava/;
// console.log(reg2.test('java'));
// console.log(reg2.test('sjava'));

// var reg3 = /java(script)?(?=\:)/;
// console.log(reg3.test('javascript'));
// console.log(reg3.test('javascript:'));
// var reg4 = /java(?!script)\w*/;
// console.log(reg4.test('javass'));
// console.log(reg4.test('javascripta'));

// console.log('javascript:'.match(reg3));

// var text = 'javascript';
// console.log(text.replace('a', 'A'));

// var text = '"test"';
// var quote = /"([^"]*)"/;
// console.log(text);
// console.log(text.replace(quote, ' “$1” '));

// var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
// var urlg = /(\w+):\/\/([\w.]+)\/(\S*)/g;
// var text = 'Visit my blog at http://www.example.com/~david';
// var result = text.match(url);
// console.log(result);
// var re = text.match(urlg);
// console.log(re);

// var pattern = /Java/g;
// var text = "Javascript is more fun than Java, Java";
// var tt = "hello Java and";
// var result;
// while((result = pattern.exec(text)) != null) {
//   console.log(result[0], result.index, pattern.lastIndex);
// }
// var result1;
// while((result1 = pattern.exec(tt)) != null) {
//   console.log('new:', result1[0], result1.index, pattern.lastIndex);
// }
// let a = 2;
// for (let x = a + 1; x < 5; x++) console.log(x);

// {
//   let x = x + 1;
//   console.log(x);
// }
