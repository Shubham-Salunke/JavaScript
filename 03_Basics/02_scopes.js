//var c = 3
let a = 300
if(true){
    let a = 10
    const b = 20
    //console.log("INNER:", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

// nested scopes***

function one(){
    const username = "shubham"
    
    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()


if(true){
    const username = "mahesh"
    if(username === "mahesh"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++ Interesting ++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}

console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}
 