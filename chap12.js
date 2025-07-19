//console.log("one");
//console.log("two");
//console.log("three");
//console.log("one");
//console.log("two");
//console.log()


//setTimeout( () => {
  //console.log("hello"); 
//}, 2000)//timeout : 2s= 2000ms

//console.log("three");
//console.log("four");

//function sum(a,b) {
  // console.log(a+b); 
//}
//function calculator(a, b, sumCallback) {
  // sumCallback(a, b);
//}

//calculator(1, 2,  () => {
  //  console.log(a+b);
//});

//const hello = () => {
  // console.log("hello");
//}

//setTimeout(hello, 3000);

//nesting
//for (let i = 0; i<5; i++) {
  // let str = "";
   //for(let j = 0; j<5; j++ ) {
     // str = str + j;
      //console.log(j);
   //}
   //console.log(i, str);
//}

let promise = new Promise((resolve,reject) => {
   console.log("Iam a promise");
   resolve(123)
});
