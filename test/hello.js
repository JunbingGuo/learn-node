// exports.world = function() {
//   console.log('hello');
// }
function Hello() {
  var name = '';
  this.setName = function(newName) {
    name = newName;
  }
  this.sayName = function() {
    console.log('hello ' + name);
  }
}
module.exports = Hello;
