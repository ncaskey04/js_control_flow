//Write a program that will take a hardcoded string, and console log the reverse it. Use a for loop

// method 1 for reversing a string

var inputString = "building";
var isArray = inputString.split("");
var outArray = [];

for (var i = 0; i < isArray.length; i++) {
	var j = isArray.length - 1 - i;
	var k = isArray[j];
	outArray.push(k);
};

var finishedString = outArray.join("");
console.log(finishedString);

/* method 2 for reversing a string

var inputString = "building";
var outputString = "";

for (var i = 0; i < inputString.length; i++){
	outputString = inputString[i] + outputString;
};

console.log("The input word is: ", inputString);
console.log("The reversed word is: ", outputString);

*/
