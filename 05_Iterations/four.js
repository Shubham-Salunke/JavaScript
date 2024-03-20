const myObject = {
    js : "JavaScript",
    CPP: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} Shortcut of ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(key);
}