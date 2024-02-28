//Use const for unchanging variables:
const a = 5;
const b : number = 33;
const c ="best";

//Use let everywhere else:
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope