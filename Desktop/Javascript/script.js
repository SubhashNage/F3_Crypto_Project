
/*const profile = {
userName:"@shradhaKapra",
isFollow:true,
followers:123,
following:123,
};
console.log(typeof profile["followers"]);
//Arithmatic Operators
let a = 5;
let b = 2;
console.log("a= ", a,"& b =",b);
 console.log("a + b =", a + b);
 console.log("a - b =", a - b);
console.log("a * b =",  a * b);
console.log("a / b =",  a / b);
console.log("a % b =",  a % b);
console.log("a ** b =", a ** b);
unary */
//unary Operator
/*let a =5;
let b =2;

console.log("a = ", a, "& b =",b);
a = a + 1;//6
console.log("a =", a);// 6*/
//for-of loop
/*let str ="JavaScript";
for(let i of str) {
//iterator characters
console.log("i=", i);
}*/
// for in loop
/*
let student = {
    name: "Subhash Nage",
    age: 24,
    cgpa: 7.5,
    isPass: true,
};
for(let key in student) {
    console.log("key=", key, "value", student[key]);
}*/
/*
for (let num = 0; num<=100; num++) {
    if (num % 2 !== 0){
        //even Number
        console.log("num=",num);
    }
}*/
//practice question
/*let gameNum =25;
let userNum = prompt("guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt("you entered wrong number.Guess again")
}*/
/*let student ={
    name: "Subhash Nage",
    age: 23,
    cgpa: 7.5,
    isPass: true,
};
for(let key in student) {
    console.log("key=",key, "value",student[key])
}*/
//print even/ odd number
/*for(let num = 0; num<=100; num++){
    if(num%2 !== 0){
    console.log("num =", num) ;   
    }
    

}*/
//Qs2 crete a game where you start with any random game number.Ask the user to keep guessing the game number until the user enters correct value
/*let gameNum = 25;
let userNum = prompt("Guess the game number : ");*/
/*while(gameNum !== userNum){
    username =prompt("you entered wrong Number.Guess again : ");

}
console.log("congratulations,you entered the right number");*/
//let str = "ApnaCollege";
/*let obj ={
    item: "Pen",
    price: 10,

};
console.log("the cost of", obj.item, "is", obj.price, "rupees");
let output = 'the cost of ${obj.item} is ${obj.price} rupees';*/
/*let items =[250,645,300,900,50];
for (let i=0; i<items.length; i++){


let offer = items[i] / 10;
items[i] -= offer;
}
console.log(items);*/
/*let foodItems =["potato","apple","litchi","tomato",];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);*/
/*let foodItems = ["potato","apple","litchi","tomato"];
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);*/
/*let foodItems =["potato","apple","litchi","tomato"];
let marks =[97,86,54,36];
console.log(foodItems);
console.log(foodItems.toString());*/
/*let marvelHeroes =["thor","spiderman","ironman"];
let dcHeroes =["superman","batman"];
let indianHeroes =["shaktiman","krish"]
let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);*/

/*let marvelHeroes =["thor","spiderman","ironman"];
let val = marvelHeroes.shift();
console.log("deleted", val);*/
/*let marvelHeroes =["thor","spiderman","ironman","Dr Strange"];

console.log(marvelHeroes.slice(1, 3));*/
/*let arr =[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);*/
/*let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");*/
/*function myFunction() {

    console.log("welcome to apna College");
    console.log("we are learning");
}


function myFunction(){
    console.log("welcome to apna College");
    console.log("We are learning JS");
}
myFunction();
function myFunction(msg,n) {
    //parameter -> input
    console.log(msg*n)
}
myFunction("I love Javascript",100);//argement
function sum(x,y){
    s = x + y;
    console.log("before return");
    console.log(y);
    return s;
}
   let value = sum(5,7);
 
   console.log(value);

   function sum(x,y){
     return x + y;
   }
   const arrowSum = (x,y) => {
    console.log(x+y);

   }
   function mul(a,b){
    return a*b;
   }

   let arrowMul = (a,b) =>{
    console.log(a*b);

   }
   const printHello = () => {
    console.log("Hellow");
   }*/
 /*  function countVowels(str){
      let count = 0;
        for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            count++;
        }
    }
    return count;
   }
   const countVow = (str) => {
    let count = 0;
    for (const char of str) {
       if( char === "a" || 
           char === "e" ||
           char === "i" ||
           char === "o" ||
           char === "u" ){
            count++;
           } 
    }
    return count;
   }*/
   /*let items =[250,645,300,900,50];
   for(let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
   }*/
   console.log("I am an external JS File");
   console.log("I am frontend Developer");
   var myAge = 23;
   let a = 19;
   let b = 29;
   let sum = a+b;
   console.log(sum);
   console.log(myAge);

   






