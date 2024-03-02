function myName(){
    console.log("S");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
}
//myName()

// function addTwoNumbers(number1, number2){   // in the bracket there ara parameter
//     console.log(number1 + number2)
// }   

function addTwoNumbers(number1, number2){   // in the bracket there ara parameter
    // let result = number1 + number2
    // return result
    return number1 + number2
}   

//const result = addTwoNumbers(1, 2)  //=> in the bracket there are argument 

//console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Shubham"));
//console.log(loginUserMessage("Shubham"));

function calculateCartPrize(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrize(200, 300, 500, 700));


const user = {
    username: "Shubham",
    price: 299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
} 

//handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})


// we aslo pass array in direct in function

const myNewArray = [200, 100, 600, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 200, 40]));