// const userEmail = "shubham@gmail.com"
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}




if (userEmail.length ===0) {
    console.log("array is empty");
}

const emtObj = {}

if(Object.keys(emtObj).length === 0){
    console.log("Objet is Empty");
}



// Nullish Coalescing Operator(??) :: null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 5
val4 = null ?? 5 ?? 50 

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// terniary Operator

//conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");