"Hello"
'World'

console.log("hello"+'World');

const name = "shubham"
const repoCount = 50

console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo coubt is ${repoCount}`); String InterPollution

 const gameName = new String("shubham-ns")

 console.log(gameName.length);
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(typeof(gameName));
 console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);