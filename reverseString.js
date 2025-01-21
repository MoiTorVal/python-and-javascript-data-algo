function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];

  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }

  addToArray(arrayStr);
  return reversedArray.join("");
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {}

reverseStringRecursive("yoyo master");
