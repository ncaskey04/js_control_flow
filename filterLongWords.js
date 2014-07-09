// Hardcode an array of words. Have a variable maxLength, and push those words to only to an array filter long words

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