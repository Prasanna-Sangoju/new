/*for(let count=1; count<=5; count=count++) {
    console.log("Apna College");
}
let sum =0;
let n = 100;
for (let i=1; i<=n; i++) {
    sum= sum + i;
}
console.log("sum = ", sum);
console.log("loop has ended");
for (var i = 1; i<= 5; i++) {
    console.log("i = ",i);
}

console.log(i);
let i = 1;
while(i<=5) {
    console.log("i=", i);
    i++;
}

let i =  20;
do {
    console.log("Apna College");
    i++;
} while (i <= 10);


//for-of loop
let str = "Java Script";

let size = 0;
for(let i of str ) {
    console.log("i=", i);
    size++;
}
console.log("String size=", size);

//for in Loop

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 9.5,
    isPass: true
};

for(let i in  student) {
    console.log(i);
}

//Practice q-1
for(let num=0; num<=100; num++){
    if(num % 2 !== 0) {//even num condition
       console.log("num=", num);
    }
}


//PQ-2
let gameNum = 25;

let userNum = prompt("Guess the game number:" );

while(userNum != gameNum ) {
userNum =prompt("You entered wrong number.Guess again");

}

console.log("Congratulations, you entered the right number");

//Strings

let str ="Apna College";
let str2 = "Shradha";
console.log(str[0]);
let obj = {
    item: "pen",
    price: 10,
};

let output = 'the  cost of ${obj.item} is ${obj.price} rupees';

console.log("the cost of", obj.item, "is",obj.price);
//Template Literals
let specialString  = 'This is a template literal';
console.log( typeof specialString);

let str = "Apna\tCollege";
console.log(str.lenght);

let str = "hello";
console.log(str.slice(0, 3));

let str1 = "apna";
let str2 = "college";

let res = str1.concat(str2);
console.log(res);

let str = "hello";
console.log(str.replace("h", "m"));

let str = "I love JS";
str[0] = "S";
console.log(str);

let fullName = prompt("enter your fullname without spaces");
let userName ="@" + fullName + fullName.length;
console.log(userName);*/



