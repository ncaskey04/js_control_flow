// Hardcode an array of words. Have a variable maxLength, and push those words to only to an array filter long words

// Method 1

var colors = ['blue', 'red', 'yellow', 'magenta', 'chartreuse', 'pink'];
var maxLength = 4;
var shortColors = [];

for (var i = 0; i < colors.length; i++) {
	var colorLength = colors[i].length;
	if (colorLength <= maxLength) {
		shortColors.push(colors[i]);
	}
};

console.log(shortColors);

/*

// Method 2

var colors = ['blue', 'red', 'yellow', 'magenta', 'chartreuse', 'pink'];
var maxLength = 4;
var shortColors = [];

for(var i = 0, currentColor; i < colors.length; i++){
	currentColor =colors[i];
	
	if (currentColor.length < maxLength) {
	  shortColors.push(currentColor);
	}
}

*/
