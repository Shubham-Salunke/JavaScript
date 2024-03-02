// singleton

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shubham",
    "full name": "Shubham Salunke", 
    age: 23,
    [mySym]: "myKey1",
    location: "Pune",
    email: "salunke@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]}

    // console.log(JsUser.name);
    // console.log(JsUser["name"]);
    // console.log(JsUser["full name"]);
    // console.log(JsUser[mySym]);

JsUser.email = "shubham@gmail.com"    
//Object.freeze(JsUser)
JsUser.email = "123@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());