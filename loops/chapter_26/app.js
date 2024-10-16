// ch 25
// var text = "the schoolll of the World War II";
// text = text.replace("World War II", "the Second World War");
// console.log(text);
// a globally replace.
// var text = "the schoolll of the World War II of thedhbsxnz World War II  ";
// var newText = text.replace(/World War II/g, "the Second World War");
// console.log(newText);
// toLOWERCASE
// var pro = prompt("enter your first name");
// var pro1 = prompt("enter your father name");
// var a = pro.toUpperCase();
// var b = pro1.toUpperCase();
// console.log(a +" " + b);
// var pro = prompt("enter your first name");
// var pro1 = prompt("enter your father name");
// var a = pro.toUpperCase();
// var b = pro1.toUpperCase();
// console.log(a +" " + b);
// var arr = [ "saad","ali","hasan","mustafa","saad"];
// agr arr ma kuch mila ga nh to wo -1 return karay ga 
// document.write(arr.indexOf("saad" , 1))
// var arr = [ "saad","ali","hasan","mustafa","saad"];
// document.write(arr.indexOf("saad",1))
// document.write(arr.lastIndexOf("saad"));
// var colors = "RED";
// console.log(colors);
// console.log(colors.charAt("2"));
// ch 26
// 73.2 roundof 73   1 sa 4 tak no chage 5 ka bad change karta math.round
// 73.2 math.ceil  74  73.1 bhi ha us p mehtod ha ceil 74 
// 73.9   us p math.round ya ceil laga ga to ya 74 karda ga 
// 73.9   agr math .flor laga ga to ya 73 hi raha ga 
// var p = 72.2;
// console.log(Math.round(p));
// var p = 72.2;
// console.log(Math.ceil(p));    //aga la gae ga
// var p = 72.9;
// console.log(Math.floor(p));
// math .random num gen kara ga 
// console.log(Math.random());
// console.log(Math.random()*1);
// console.log(Math.random());

// 28
// Converting strings to integers and decimals
// use js method
// prompt()
// parseInt()
// parseFloat()

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge);

// var ageString = "25";  // Age ko string ke tor par rakha gaya
// var ageNumber = parseInt(ageString);  // String ko number me convert kia
// console.log(ageNumber);  // Output: 25  typeof number 

// var a = prompt("Enter your age");
// var show = parseInt(a)+ 4;
// console.log(show);


// parseFloat() str ko decimal ma convert karta ha 
// var priceString = "99.99";  // Price ko string ke tor par rakha gaya
// var priceNumber = parseFloat(priceString);  // String ko float number me convert kia
// console.log(priceNumber);  // Output: 99.99   typeOf number

//  prompt user sa inp lana ka liy prompt use karta han 

// 29
// Converting strings to numbers, numbers to
// strings

// var ageString = "30";  // Age ko string ke tor par rakha gaya
// var ageNumber = Number(ageString);  // String ko number me convert kia
// console.log(ageNumber);  // Output: 30
// console.log(typeof(ageNumber));

// var priceNumber = 1500;  // Price ko number ke tor par rakha gaya
// var priceString = priceNumber.toString();  // Number ko string me convert kia
// console.log(priceString);  // Output: "1500"
// console.log(typeof(priceString));

// 30
// Controlling the length of decimals
// var num = 10.59675;
// var roundedNum = num.toFixed(3);  // 2 decimal places tak round karega
// console.log(roundedNum);  // Output: "10.60"

// var num = 10.59675;
// var roundedNum = num.toFixed();  // No decimal places, nearest whole number tak round karega
// console.log(roundedNum);  // Output: "11"

// 31
// Getting the current date and time
// sir ghous clss 14
// var date = new Date();
//  new ka keyword laga ga date ka sat , date ik function constructor ha      
// return the date obj 
// console.log(date);
// console.log(typeof(date));    //obj

// var date = new Date();
// var days = ["sun","mon","tues","wed","thurs","fri","satrur"];
// console.log(days[date.getDay()]);

// var date = new Date();
// var month  = ["jan","feb","march","april","may","june","july","auges","sep","oct","nov","dec"];
// console.log(month[date.getMonth()]);

// var date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());


// method
// var date = new Date("01 05 june");
// console.log(date);

// var date = new Date("19-july-2007");
// console.log(date);

// var date = new Date("19-july-2007");
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var dayName = days[date.getDay()];
// console.log(dayName); // Output: Thursday


// Given date
// var date1 = new Date("19-july-2007");
// // Current date
// var date2 = new Date();
// // Calculate the difference in years and month
// var years = date2.getFullYear() - date1.getFullYear();
// var months = (date2.getMonth() - date1.getMonth()) + (years * 12);
// console.log(months); // Output will be the total months passed

