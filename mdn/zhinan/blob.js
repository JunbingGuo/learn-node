var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // 一个包含DOMString的数组
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // 得到 blob

console.log(oMyBlob.size);
console.log(oMyBlob.type);

var testBlob = oMyBlob.slice(0,10);
console.log(testBlob.size)
console.log(testBlob)

testBlob.text().then(text => {
  console.log(text);
});
(async function(){
  var text = await testBlob.text();

  console.log(text);
})();

testBlob.arrayBuffer().then((binary) => {
  console.log(binary);
})
