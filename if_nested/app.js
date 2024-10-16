
var userSkills = prompt("what languages you know")
var userResidence = prompt("where do you live")
var userQualification = prompt("what's your degree")
var requiredSkills = "javascript"
var requiredResidence = "karachi"
var requiredQualification = "BSCS"

if (userSkills == requiredSkills) {
    if (requiredResidence == userResidence) {
        if (requiredQualification == userQualification) {
            alert("you are hired")
        }
        else{
            alert("BSCS krlo phr ana")
        }
    }
    else {
        alert("karachi ajao")
    }
}
else {
    alert("javascript sekh kr ao")
}


let age = 20;
let hasPermission = true;
if (age >= 18) {
    console.log("Aap adult hain.");
    if (hasPermission) {
        console.log("Aapko entry mil gayi hai.");
    } else {
        console.log("Aapko entry nahi mil sakti.");
    }
}
else {
    console.log("Aap adult nahi hain.");
}

var ages = 21;
var isPermissions = true;
if(ages >= 18){
    console.log("ap adult han ");
if(isPermissions){
    console.log("ap ko entry mil gae ha ");
}else{
    console.log("ap ko entry nh mil sakti ");
}
}
else{
    console.log("ap adalt nh ha");
}
