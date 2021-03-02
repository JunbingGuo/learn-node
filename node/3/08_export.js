// exports.test = 100;
// exports 不能改变指向，否则就拿不到值了。可以看做module.exports的快捷方式
// 这种方式require取不到值
// exports = {
//   a: 1,
//   b: 2,
//   test: 3,
// }

module.exports = {
  a: 1,
  b: 2,
  test: 3,
}