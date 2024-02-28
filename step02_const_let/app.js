//Use const for unchanging variables:
var a = 5;
var b = 33;
var c = "best";
//Use let everywhere else:
if (true) {
    var z = 4;
    //use z
}
else {
    var z = "string";
    //use z
}
console.log("let: " + z); // Error: z is not defined in this scope
