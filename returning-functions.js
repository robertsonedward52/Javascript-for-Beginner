function one() {
  return 'one';
}

// let value = one();
// console.log(value);
// console.log(one());

let value = one;
// console.log(typeof value);   // string
// console.log(typeof one); 
// console.log(value());

// function
// String 
// boolean
// underfined
// function


/* function please() {
return function() {
    console.log('Please');
}
}

let myfunction = please();
myfunction();
*/

// Function three 

function three() {
  return function() {
    return('three');
  }
}

console.log(three()());
