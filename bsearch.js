"use strict";

function bsearch(array, elem) {
  var min = 0;
  var max = array.length - 1;
  var index, foundElem;

  console.log("Searching for " + elem + " within array");

  while (true) {
    index = Math.floor((max - min) / 2) + min;
    foundElem = array[index];
   
    console.log("Searching index: " + index + " min: " + min + " max: " + max);    

    if (foundElem == elem) {
      console.log("Found Element: " + foundElem);
      break;
    }
    if (foundElem < elem) {
      console.log("Element: " + foundElem + " is less than " + elem);
      min = index + 1;
    }
    if (foundElem > elem) {
      console.log("Element: " + foundElem + " is greater than " + elem);
      max = index - 1;
    }
  }
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,41,43,44,45,46,47,48,49,50];

let searchNum = Math.floor(Math.random() * 50) + 1;

bsearch(array, searchNum);
