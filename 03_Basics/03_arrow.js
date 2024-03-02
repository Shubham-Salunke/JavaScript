const user = {
    
    username: "shubham",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shubham"
//     console.log(this.username);
// }
// chai()

// const chai1 = function(){
//     let username = "shubham"
//     console.log(this.username);
// }
// chai1()

// const chai = function(){
//     let username = "shubham"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "shubham"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implisit return
// const addTwo = (num1, num2) => num1 + num2    
// console.log(addTwo(3, 4));

// Note if your write in {} theun u need to write return keyword
// but if u use () then u don't need to write return keyword

// const addTwo = (num1, num2) => (num1 + num2)    
// console.log(addTwo(3, 4));


