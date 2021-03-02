// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}
var testArr = [1, 2, [3, 4], [5, 6, 7], 9];
console.log(simpleNormalizeChildren(testArr));
console.log([].concat(1, 2, [3, 4], [5, 6, 7], 9));