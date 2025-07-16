
// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Satyajit",
    "full name": "Satyajit Pradhan",
    [mySym]: "key1",
    age: 22,
    location: "BBSR",
    email: "satyajitpradhan522@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.age = 20
Object.freeze(JsUser)
JsUser.age = 22

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);

