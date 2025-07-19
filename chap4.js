/*let heroes = ["ironman", "thor", "hulk", "shaktiman","Spiderman","batman" ];
for(let idx=0; idx<heroes.length;idx++) {
    console.log(heroes[idx]);
}
//for of 
for(let hero of heroes) {
   console.log(hero);
}

let cities = ["delhi", "pune", "mumbai","hyderabad","vijayawada" ];

for(let city of cities) {
   console.log(city.toUpperCase()); 
}

let marks = [85,97,44,37,76,80];
let sum = 0;

for (let val of marks) {
    //console.log(val);
    sum = sum + val;
}

let avg = sum / marks.length
console.log("average marks of the class =", avg);

//sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]

let items = [250, 645, 300, 900, 50];


let i = 0;
for( let val of items ) {
    console.log('value at index ${idx} ');
    let offer = val;
    items[i] = items[i] - offer;
    console.log("value after offer");
    i++;
}

for(let i=0; i<items.length; i++) {

}

let foodItems =["Potatoes", "Apples", "litchi"];
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

let foodItems = ["Potato","apple","litchi", "tomato"];
let marks = [97, 86, 54, 36];
console.log(foodItems);
console.log(foodItems.toString);

let marvel_heroes = ["thor", "spiderman", "ironman"]
let dc_heroes = ["superman", "batman"];
let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

let marvelHeroes = ["thor", "spiderman", "ironman"];
let val = marvelHeroes.shift();
console.log("deleted", val);

//Slice Splice
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,2));

let arr = [1, 2, 3, 4, 5, 6, 7];
//arr.splice(2,2,101,102);
//Add element
//arr.splice(2,0,101);

//Deelete Element
//arr.splice(3,1);

//Replace Element 
arr.splice(3,1,101);*/
//PQ

let companies = ["Bloomberg", "Microsoft", "Uber","Google","IBM", "Netflix"];
companies.shift();






