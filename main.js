
// //arrays
// const arr1 = [40, 60,80]
// const arr2 = new Array(90, 20)
// const users = ['Barbara', 'Reson', 'Mootian']
// const anything = [ 'hello', 2, true,
// {name: 'barbara', age:20},
// new Date()]
// let val;
// //manipulating the array
// //add to the end
// arr1.push(200)
// //Add to the front
// arr1.unshift(300)
// //remove the end
// arr1.pop()
// //at position 1 , remove one item and insert "one" "two"
// arr1.splice(1, 2,)
// // reverse 
// arr1.reverse

// // concat array
// val =arr1.concat(arr2)
// //sort
// val  = users.sort ().reverse ()
// val  = arr1.sort()
// //sort with compare function 
// val = arr1.sort(function(a, b){
//     return a-b
// })
// // reverse sort with compare function 
// val = arr1.sort(function(a, b){
//     return b-a
// })
// // find
// function gt10(num){
//     return num > 10
// }
// val = arr1.find(gt10)
// //find and filter
// val = arr1.filter(gt10)
// console.log(val)

//if statement
// let mark
// // Abstract equallity comparision
// if (mark == 5){
//     console.log('The mark is 5')
// }else{
//     console.log('the mark is not 5')
// }

// strickly equality comparision
// if (mark === 5){
//     console.log('The mark is 5')
// }else{
//     console.log('The mark is not 5')
// }
//check undefine
// if (typeof mark !== 'underfined'){
//     console.log('The mark is ${mark}')
// }else{
//     console.log ('The mark is underfine')
// }
//else if 
// let hour = 8
// if (hour <12){
//     console.log ('Good morning')
// }else if(hour <20){
//     console.log ('How are you doing')
// }else{
//     console.log('Good Evening')
// }
// switch case
// const fruits = "apple"
// switch(fruits){
//     case "apple":
//         console.log('red')
//         break;
//      case "orange":
//         console.log('orange')
//         break;  
//         default:
//         console.log ('I dont\'t know')
//         break
// }
//IIFE(Immediately Invoked Function Expression)

// (function (){
//     var num = 3;
//     console.log(num);
// })()
// for loop
// for (let i = 0; i < 10; i++){
//     console.log (i);
// }
// let doc 
// doc = document
// doc = document.head
// doc = document.domain
// console.log(doc)
 
//window object methods
// function dothis(what) {
//     alert("mom says to do" + what)  
// }
// if(window.addEventListener)
// window.addEventListener("load", function() {dothis(' use the available resources well')}, true)  

//appendchild
document.body.appendChild(document.getElementById("myheader"))//moves "myheader" to the end of the page
 
//styling the form using getElementById
window.onload = function () {
    document.getElementById("name").style.backgroundColor = "#102F4D";
    document.getElementById("email").style.backgroundColor = "#102F4D";
    document.getElementById("legend").style.backgroundColor ="#185A95";
}
//queryselecter
let form
form = document.querySelector('form').style.backgroundColor = blue
console.log(form)
