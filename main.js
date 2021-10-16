
//arrays
const arr1 = [40, 60,80]
const arr2 = new Array(90, 20)
const users = ['Barbara', 'Reson', 'Mootian']
const anything = [ 'hello', 2, true,
{name: 'barbara', age:20},
new Date()]
let val;
//manipulating the array
//add to the end
arr1.push(200)
//Add to the front
arr1.unshift(300)
//remove the end
arr1.pop()
//at position 1 , remove one item and insert "one" "two"
arr1.splice(1, 2, "one", "two")
console.log(arr1)
// reverse 
arr1.reverse