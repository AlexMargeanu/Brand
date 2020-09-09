document.getElementById("footer").addEventListener("click", function (){
const myDiv = document.getElementById("footer");
if(myDiv.classList.contains("insertOne")) {
  myDiv.classList.remove("insertOne");
} else {
  myDiv.classList.add("insertOne");
 }
});



document.getElementById("left").addEventListener("click", function (){
const leftDiv = document.getElementById("left");
if(leftDiv.classList.contains("insertTwo")) {
  leftDiv.classList.remove("insertTwo");
} else {
  leftDiv.classList.add("insertTwo");
 }
});



document.getElementById("rightText").addEventListener("click", function (){
const rightDiv = document.getElementById("right");
if(rightDiv.classList.contains("insertThree")) {
  rightDiv.classList.remove("insertThree");
} else {
  rightDiv.classList.add("insertThree");
 }
});





$(document).ready(function() {
   $('.fadeInOne').delay(800).fadeIn(1500);  
});
$(document).ready(function() {
   $('.fadeInTwo').delay(2000).fadeIn(2000);  
});
$(document).ready(function() {
   $('.fadeInThree').delay(4000).fadeIn(2000);  
});



