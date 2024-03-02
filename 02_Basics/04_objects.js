//const tinderUser = new Object()  => Singleton object

const tinderUser = {}    // => nonsingleton Object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "shubham",
            lastname: "salunke"
        }
    }
}
// console.log(regularUser.fullname.userfullname); 
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={ 1:"a", 2:"b"}
const obj2 ={ 3:"c", 3:"d"}

//const obj3 = { obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);