// Array Methods 
// forEach , map , filter , some , every , reduce

// These function use callback as a input

/* forEach

   arr.forEach(some function definitioon or name)

   // Example

   
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}

arr.forEach(print);

// OR

arr.forEach(function(el) {
    console.log(el);
});

*/


let arr = [1, 2, 3, 4, 5];

let print = function(el) {
    console.log(el);
}

arr.forEach(print);
