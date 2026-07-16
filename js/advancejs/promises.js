// Creating a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      let success = true;
      if (success) {
        // Operation successful
        resolve("Operation completed successfully");
      } else {
        // Operation failed 
        reject("Operation failed");
      }
    }, 3000);
  });
}

// it will not give you anything till now
// let response = fetchdata();
// console.log(response);

fetchData()
.then((data) => {
  console.log(data)
return 'Sahil'
})
.then((value) => console.log(value))
.catch((error) => console.log(error))
