// // let teaOrder = makeTea(prompt("which tea you want"));
// // function makeTea(typeofTea) {
// //   return `making ${typeofTea}`;
// //   // console.log("Makeing green tea");
// //   //   if (typeofTea == "green tea") {
// //   //     teaOrder = typeofTea;
// //   //   }
// // }
// // console.log(teaOrder);

// // 2nd
// let result = orderTea(prompt("which tea do you want"));
// function orderTea(teaType) {
//   let confirm = confirmOrder(teaType);
//   function confirmOrder(paramveer) {
//     return `order confirm for chai ${paramveer}`;
//   }
//   return confirm;
//   // return confirmOrder();
// }
// console.log(result);

// // 3rrd ----> ARROW FUNCTION

// const calculateTotal = (par1, par2) => `the answer is ${par1 * par2}`;

// let cost = calculateTotal(5, 4);
// console.log(cost);

// 4th ---> its called First-Class function(foreach loop is an example of higher-order function)

function makeTea(typeofTea) {
  return `hey i am got called ${typeofTea} `;
} // here typeofTea works as a placeholder and it can be named anything we actually have to pass value during the call it just a placeholder name
function processTeaOrder(teaFunction) {
  //makeTea yahan aakar teafunction bn jayega just like
  // processTeaOrder(makeTea(typeofTea))
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);

// 5th
function createTeamaker(calledFunction) { // revise these again and again
  return calledFunction("green tea");
}
function retunable(teaType) {
  return `making ${teaType}`;
}
let teaMaker = createTeamaker(retunable);
console.log(teaMaker);


/// we are fetching the code from udemy for this question bcoz its a very better way to learn to write differently 

