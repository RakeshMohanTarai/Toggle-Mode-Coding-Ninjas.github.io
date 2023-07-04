var heading = document.getElementById("heading");
var toggleButton = document.getElementById("theme-switcher");
var backgroundColors = ["blue", "red", "purple", "pink", "grey", "yellow", "green", "teal", "orange", "maroon", "navy", "brown", "olive", "cyan", "magenta", "violet", "indigo", "silver", "gold"];

var colorIndex = 0;

function colorChange() {
  var color = backgroundColors[colorIndex];
  document.body.style.backgroundColor = color;
  heading.style.color = "white";
  heading.style.backgroundColor = "black";
}

toggleButton.addEventListener('click', function() {
  colorIndex = (colorIndex) % backgroundColors.length;
  colorChange();
  colorIndex++;
});

//Use this code you want to change color randomly

// var heading = document.getElementById("heading");
// var toggleButton = document.getElementById("theme-switcher");
// var backgroundColors = ["blue", "red", "purple", "pink", "grey", "yellow", "green", "teal", "orange", "maroon", "navy", "brown", "olive", "cyan", "magenta", "violet", "indigo", "silver", "gold"];

// function colorChange() {
//   var randomIndex = Math.floor(Math.random() * backgroundColors.length);
//   var color = backgroundColors[randomIndex];
//   document.body.style.backgroundColor = color;
//   heading.style.color = "white";
//   heading.style.backgroundColor = "black";
// }

// toggleButton.addEventListener('click', function() {
//   colorChange();
// });



//Now this code does't need to do anything in this code, this is only for extra Information

//  var toggleBtn = document.getElementById("checkBox");
//  var heading = document.getElementById("heading");
//  var backgroundColor = ["black","blue","red","purple","pink","grey","yellow"];
//  var colorIndex = 0;

//  function colorChange() {
//   var randomColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
//   document.body.style.backgroundColor = randomColor;
    // var color = backgroundColor[colorIndex]  ;  
    // document.body.style.backgroundColor = color; 
    // colorIndex = (colorIndex + 1) % backgroundColor.length;   
    // heading.style.color = "white"; 
    // heading.style.backgroundColor = "black";  
//  }
//  toggleBtn.addEventListener('click',colorChange);


// var heading = document.getElementById("heading");
// var toggleBtn = document.getElementById("checkBox");
//  //var toggleBtn = document.getElementsByClassName("check");
//  //console.log(toggleBtn);
// //var toggleBtn = document.querySelector(".toggle input");

// toggleBtn.addEventListener('click', function() {
//     if (this.checked) {
//         // Dark mode
//         document.body.style.backgroundColor = "black";
//         heading.style.color = "white";
//     } else {
//         // Light mode
//         document.body.style.backgroundColor = "white";
//         heading.style.color = "black";
//     }
// });


