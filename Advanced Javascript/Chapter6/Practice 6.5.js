let value = "1000";
(function () {
    let value = "new value";
    console.log(value);
  })();
let result = (function () {
  let value = "newer value";
  return value;
})();

console.log("result: " + result);
  