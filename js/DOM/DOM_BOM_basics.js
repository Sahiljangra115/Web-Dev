// console.log("Pritam is a bad gaaye(cow)");
// console.log(window); // using the window element we can access the BOM(Browser object model) (location,port,navigator etc.) and DOM(Document object model) as well.

// using the function window.something in console of the browser we can access various properties and methods of the BOM and DOM.

//window.outerWidth // gives the width of the window
// window.outerHeight // gives the height of the window
// window.innerWidth // gives the width of the window including the scrollbar

//navigator // gives the information about the browser
// navigator.userAgent // gives the user agent string of the browser

//location // gives the current URL of the page
// location.href // gives the current URL of the page
// location.hostname // gives the hostname of the page

// --------------------------- Example 1 -------------------------------

// //here we have to access the dom elements we can do that by using the unique id/class assigned to it
// document.getElementById("changeTextButton").
// addEventListener('click', function () {
//   /*  () => {
//                   }
//         */

//   console.log(this);
//   // this refers to the context who is calling the function
//   // --------> Here is a very important thing that when we use arrow function instead of Function() the (this) keyword will give a global context not for who is calling it.
// })

// --------------------------- further part of Example 1 -------------------------------

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "tere bhai ki jai";
    paragraph.style.backgroundColor = "pink";
    paragraph.style.color = "black";

    //console.log(paragraph.textContent);
  });

// ---------------- Example 2 --------------
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let holder = document.getElementById("citiesList");
    holder.firstElementChild.classList.add("highlight"); // here classlist givesthe list of elements with classes in that id mentioned earlier
  });

//----------------- Example 3 -------------------
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffee = document.getElementById("coffeeType");
  coffee.textContent = "Espresso";
});

//----------------- Example 4 -------------------
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//----------------- Example 5 -------------------
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let grab = document.getElementById("taskList");
    grab.lastElementChild.remove();
  });

//----------------- Example 7 -------------------

// here we used event to find out the event happens when we click on the list.
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    // here we added (.) before the teaItem because its a method to call or select class
    alert("you have selected" + event.target.textContent); // target is a function of the BOM model
  }
});

//----------------- Example 8 -------------------

document.getElementById("submit").addEventListener('submit', function(event){
  alert("Form Submitted succesfully!");
})
