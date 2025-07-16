

function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("T");
}

// sayMyName()



// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumber(3,4)




function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumber(3, 5)
// console.log("Result:", result);

function loginUserMessage(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessage("satyajit"));




function loginUserMessage(username) {
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());


function loginUserMessage(username = "samy") {
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    // if(!username){
    //     console.log("please enter a username");
    //     return
    // }
    return `${username} just logged in`
 }
// console.log(loginUserMessage());
// console.log(loginUserMessage("munu"));


// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 500, 2000));



// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 500, 2000));




function calculateCartPrice(var1, var2, ...num1) {
    return num1
}
//  console.log(calculateCartPrice(200, 300, 500, 2000));



const   user = {
    username: "munu",
    price: 1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "samy",
//     price: 3999
// })


const myNewArray = [200, 300, 400, 2000]

function returnValue(getArray) {
    return getArray[2]
}

// console.log(returnValue(myNewArray));

console.log(returnValue([299, 399, 499, 2999]));

