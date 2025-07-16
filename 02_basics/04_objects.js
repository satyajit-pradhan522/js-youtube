
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "munu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "satyajit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "satyajit",
            lastname: "pradhan"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj5 = {7: "a", 8: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));



const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "satyajit"
}

const {courseInstructor: instructor} = course
console.log(instructor);
