// if statement

// const isUserLoggedIn = true
// const temperatur = 41

// if (temperatur < 50 ){
//     console.log("Less than 50");
// }else{
//     console.log("Temperatur is greater than 50");
// }
// comparison operator  => <, >, <=, >=, ==, !=, ===, !==




// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)


// ShortHand Notation
const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");



// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900 ){
//     console.log("lesss than 900");
// }else{
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard & 2==3) {
    console.log("Allow to buy  course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}