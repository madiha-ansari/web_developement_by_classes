// for(let count =  1; count <= 5; count++){
//     console.log("MADIHA LOVE ALI HUZAIFA");
// }  //5 time execute

// for(let count =  0; count <= 5; count++){
//         console.log("MADIHA LOVE ALI HUZAIFA");
//     }  // 6 time executes

// calculate sum of 1 to 5
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);


// nested loop 
// var arr = ["salman", "arbaz", "asarib"];
// var arr2 = ["saleem khan","ali"];

// for (var i = 0; i < arr.length; i++) {
//    for(var j = 0 ; j < arr2.length; i++){
// document.write(arr[i]+" " + arr2[j])
//    }
// }

// Array of numbers
// const numbers = [12, 25, 37, 44, 56, 63, 78];

// // Flag to track if an even number is found
// let evenNumberFound = false;

// // Loop through the array
// for (let i = 0; i < numbers.length; i++) {
//   // Check if the number is even
//   if (numbers[i] % 2 === 0) {
//     evenNumberFound = true;
//     console.log(`Even number found: ${numbers[i]}`);
//     break; // Loop interruption (stop loop when an even number is found)
//   }
// }

// // Checking the flag
// if (!evenNumberFound) {
//   console.log("No even number found in the array.");
// } else {
//   console.log("Loop interrupted because an even number was found.");
// }




// ch 18 
// var numElements = cleanestCities.length;
// var numElements = cleanestCities.length;
//  var matchFound = false;
//  for (var i = 0; i < numElements; i++);
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound = true;
//  alert("It's one of the cleanest cities");
// }
// if (matchFound === false) {
//  alert("It's not on the list");
//  }




// ch = 19
// let found = false;  // This is our flag (Boolean)
// const items = ['apple', 'banana', 'orange', 'mango'];
// for (let i = 0; i < items.length; i++) {
//     if (items[i] === 'orange') {
//         found = true;  // We found the item, setting the flag to true
//         console.log('Found the orange at index:', i);
//         break;  // Loopus interruptus: stop the loop early
//     }
// }
// if (!found) {
//     console.log('Orange not found');
// }

// ch 20

// for (let i = 1; i <= 3; i++) {  // Outer loop (rows)
//     let stars = '';  // String to store stars for each row
//     for (let j = 1; j <= i; j++) {  // Inner loop (columns)
//         stars =  stars + '* ';  // Add a star to the string
//     }
//     console.log(stars);  // Print the stars for this row
// }

// const fruits = ['Apple', 'Banana', 'Orange'];
// const colors = ['Red', 'Yellow', 'Green'];
// for (let i = 0; i < fruits.length; i++) {  // Outer loop for fruits
//     console.log('Fruit:', fruits[i]);  // Print the fruit
//     for (let j = 0; j < colors.length; j++) {  // Inner loop for colors
//         console.log('  Color:', colors[j]);  // Print the color
//     }
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }
// console.log(fullNames);

// 21
// Changing case
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }
// else add
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }else{
//         alert("nothing")
//     }
// }

// 22
// Strings:
// Measuring length
// and extracting parts

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
//     console.log(monthAbbrev);
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//         alert("No double spaces!");
//         break;
//     }
// }

// var fruit = prompt("Enter a fruit name");
// if (fruit.includes("apple")) {
//     alert("You entered a fruit with 'apple' in it!");
// } else {
//     alert("No 'apple' found!");
// }

// var fruits = ["apple", "banana", "orange"];
// if (fruits.includes("banana")) {
//     alert("Banana is in the list!");
// }

// var text = "Hello, world!";
// var result = text.includes("world"); // یہ چیک کرے گا کہ 'world' موجود ہے یا نہیں
// console.log(result); // Output: true

// var text = "pakistan loved you";
// var show = text.includes("loved");
// console.log(show);


// var str = prompt("hellow");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//         alert("No double spaces!");
//         break;
//     }
// }

// var users = prompt("enter you text");
// var shows = users.length;
// for(var i = 0; i < shows; i++){
// if(users.slice(i ,i+2) === " "){
//     console.log("wrong");
// }else{
//     console.log("buri bat");
// }
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 3) === "abc") {
//         alert("The text contains 'abc'!");
//         break;
//     }
// }

// 23
// Strings:
// Finding segments

// var text = "To be or not to be.";
// var segIndex = text.indexOf("be");
// console.log(segIndex);

// var text = "I love JavaScript!";
// var position = text.indexOf("JavasScript");
// console.log(position);


// var text = " the phrase World War II. They say it should be the Second World War;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }

// var text = "Hello, World!";
// var firstChar = text.charAt(0);  // 'H'
// var secondChar = text.charAt(1); // 'e'
// var fifthChar = text.charAt(4);  // 'o'

// console.log(firstChar);  // Output: H
// console.log(secondChar); // Output: e
// console.log(fifthChar);  // Output: o

///////////////////////////////////////////////////////////////
// 24
// Strings:
// Finding a character at a location
// var firstName = "madiha ansari";

// var firstChar = firstName.slice(0, 2);                        //slice js method copy karta ha 0 sa batana hota ha ka  kaha sa kaha tak karna ha is ma ik num zaiyada dana parta ha 

// var firstChar = firstName.charAt(8)                       //charAt js method start 0 return alphabts charAt return the charcter 

// var lastChar = firstName.charAt(firstName.length - 1);    //length - 1 last ka element return karta ha 

// console.log(lastChar);
// console.log(firstChar);

// var text = "Hello, how are you!";
// var index = text.indexOf("!");
// if (index !== -1) {
//     console.log("Exclamation point found at index: " + index);
// } else {
//     console.log("Exclamation point not found");
// }             // yaha p indexof ka method use howa ha 
/////////////////////////////////////////////////////////////////
// 25
// Strings:
// Replacing characters

// var text = "The history of World War II is important.";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// console.log(text);

var text = "Hello, World!";
var result = text.substring(8) ; // "Hello" حاصل کرے گا
console.log(result); // Output: "Hello"
