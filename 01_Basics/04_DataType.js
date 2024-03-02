// stack (Primitive DataType), Heap(Non-Primitve)

let myYoutubename = "shubhamsalunke"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername); 

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let usertwo = userOne

usertwo.email ="shubam@gmail.com"
console.log(userOne);
console.log(usertwo);