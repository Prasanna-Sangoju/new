//const student = {//objects
    //fullName : "Lakshmi Prasanna",//properties
    //marks : 95.5,
    //printMarks : function () {//functions or methods
       // console.log("marks =", this.marks);//this.marks means student.marks
   // }, 
//};

//const employee = {
  // calcTax() {
      // console.log("tax rate is 10%");
   //},
//};

//const karanArjun = {
  //  salary : 50000,
    //calcTax() {
      //console.log("Tax rate is 20%")
    //}
//};

//const karanArjun2 = {
   // salary : 50000,
//};

//const karanArjun3 = {
   // salary : 50000,
//};

//const karanArjun4 = {
  //  salary : 50000,
//};


//karanArjun.__proto__ = employee;
//karanArjun2.__proto__ = employee;
//karanArjun3.__proto__ = employee;
//karanArjun4.__proto__ = employee;

//class ToyotaCar {
  // constructor(brand) {
    //  console.log("creating new objects", mileage);
      //this.brand = brand;
      //this.mileage = this.mileage;
   //}
   //start() {
     // console.log("start");
   //}
   //stop() {
     // console.log("stop");
   //}
//}

//let fortuner = new ToyotaCar("fortuner",10);//constructor
//console.log(fortuner);
//let lexus = new ToyotaCar("lexus",12);//constructor
//console.log(lexus);

//Inheritance
//class Parent {
  // hello() {
    //  console.log("hello");
   //}
//}
 //class Child extends Parent {}

 //let obj = new Child();
 //class Person {
   //constructor(name) {
     // this.species = "homo sapiens";
      //this.name = name;
   //}
   //eat () {
      //console.log("eat");
   //}
 //}

 //class Engineer extends Person {
   //constructor(name) {
     // super(name);//to invoke parent class constructor
   //}
   //work() {
     //  super.eat();
      //console.log("solve problems");
   //}
 //}

 //let engObj = new Engineer("prasanna");


 //Practice Question
 let DATA = "secret Information";
 class User {
     constructor(name, email) {
        this.name = name;
        this.email = email;
     }
     viewData() {
        console.log("data =", DATA);
     }
 }
 class Admin extends User {
     constructor(name, email) {
      super(name, email);

     }
     editData() {
         DATA = "some new value";
     }
 }

let student1 = new User("Prasanna", "abc@gmail.com");
let student2 = new User("Lakshmi", "def@gamil.com");

let teacher1 = new User("Dean", "dean@college.com");
let admin = new Admin("admin", "admin@college.com");


