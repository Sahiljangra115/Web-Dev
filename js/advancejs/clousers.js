/* 
They are FUNCTIONS that remember the environment they are created in 
They have the memory to remember things
they can retain the variables declared outside the function like below
counter value is declared outside the function
The clouser function can be created when a function is declared inside the function
*/
function outer() {
    let counter = 0
    return function () {
        counter++
        return counter
    }
}

let increament = outer()
console.log(increament());
console.log(increament());
console.log(increament());
