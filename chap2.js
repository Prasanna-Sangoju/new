//Arithmetic Operators
/*let a = 5;
let b = 2;
console.log("a=",a,"& b=", b);
console.log("a+b=",a+b);
console.log("a-b",a-b)
a=a+1;
console.log("a-- = ", a--);
//Assignment Operators
let a = 5;
let b = 2;
a*=4;
console.log("a=", a);
//Comparison Operators
let a = 5;
let b = 2;

console.log("5 == 2", a!=b);
let a = 5;//number
let b = "5";//string
console.log("a==b", a==b);
let a = 5;
b = 3;
console.log("5>3",a>b);

//Logical Operators
let a = 6;
let b = 5;

let cond1 =  a>b; //true
let cond2 =  a === 6;//true
console.log("cond1 && cond2 = ",cond1 && cond2);
//Conditional Statements
//let age = 16;
let mode = "light";
let color;
if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);


if(age>18) {
    console.log(" You can vote");
}

if(age<18) {
    console.log("You cannot vote");
}


//Practice Question
//alert("Hello");
 let num = prompt("Enter a Number");

 if(num % 3 === 0) {
    console.log(num," is a multiple of 3");
 }else {
    console.log(num, "is not a multiple of 3");
 }*/

//Practice Question-2
let score = prompt("enter your score(0-100");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
}else if(score >= 70 && score <= 89) {
    grade = "B";
}else if ( score >= 60 && score <= 69) {
    grade = "C";
}else if ( score >=50 && score<= 59) {
    grade = "D";
} else if (score>=0 && score<=49 ){
    grade="F";
}

console.log("According to your score, your grade was:",grade);


