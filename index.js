
/* Get parent container */
var parentNode = document.getElementById("main-container")


console.log(parentNode)

//Select each of the svg path elements 
const logo = document.querySelectorAll("#logo path")


console.log(logo)

// Find out the total length of each of the svg path elements to fit this in CSS - stroke-dasharray and stroke-dashoffset
for (var i = 0; i < logo.length; i++) {
  console.log(`the element is ${i} and ${logo[i].getTotalLength()}`)
}