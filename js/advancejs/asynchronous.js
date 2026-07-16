/*
 If a code runs line by line it's synchronous behaviour of it 

 In js some functionalities needs time to execute so we have to provide some time delay and that leads to Asynchronous
 Functionalities like:
 1. network calls
 2. write and read from files(memory ssd)
 3. some time function
 4. user input
 

*/

console.log("Worldwide");
function sayhello() {
 console.log("i would like to say hello after sometime");
    
}

setTimeout(() => {
    sayhello()
}, 4000); // it will execute sayhello function after 4 seconds 

for (let index = 0; index < 10; index++) {
    console.log(index);
}


/*      ----------------- reason for some functions to be executed before the timer function(not in sequence/sync) ---------------------  
the code written in js first gives all functions to the call stack 
with the help of the event loop it executes each function but the call event does not have all capabilites
like network call and timer function so the remaining code then moves to the browser engine like node/bin/deno
they have the capabilties to do the remaining code and then moves to the queues and then executes

*/