/*function myFunction() {
    console.log("Welcome to JavaScript");
    console.log("We are learning JS");
}

myFunction();*/
/*function myFunction(msg) { //parameter --> input
     console.log(msg);
}

myFunction("I Love JS"); //Parameter

//Functioon of sum of 2 numbers
function sum(a,b) {
   console.log(a+b);  
}

function sum(x,y) {
    s = x+y;
     return s;

}

let val = sum(3,4);
console.log(val);
//Arrow Functions

const arrowSum =(a,b) => {
     console.log(a+b);
}

const arrowMul = (a,b) => {
    console.log(a*b);
}
//PQ
function countVowels(str) {
  for(const char of str) {
    console.log(char);
  }
}

function countVowels(str) {
  let count = 0;
  for(const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      ) {
        count++;
       }
  }
   console.log(count);


let arr = [1,2,3,4];
arr.forEach(function printVal(val) {
    console.log(val);
}  )

let arr= ["Vinjayawada","Hyderabad","Banglore"];
arr.forEach((val, idx) =>  {
  console.log(val.toUpperCase(), idx);
} );

let nums =[2,3,4,5];
nums.forEach((num) => {
  console.log(num * num);
} );

let num = [76,23,67,76];
  nums.map((val) => {
    console.log(val);
  });

let calcSquare = (num) => {
  console.log(num*num);
};

let arr = [1,22,3,4,5,6,7,8];
let evenArr = arr.filter ((val) => {
  return val%2 === 0;
});

console.log(evenArr);*/

let arr = [1,2,3,4];

const output = arr.reduce((res, curr) =>{
  return res+ curr;
});
console.log(output);
