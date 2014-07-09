//Write a program that will take a hardcoded string, and console log the reverse it. Use a for loop

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