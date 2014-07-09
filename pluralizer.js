// Take an input like
// thing = "cat" & count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..

var pluralizer = function(number, noun) {
	if (number > 1) {
		return number + " " + noun + "s";	
	}
	else {
		return number + " " + noun;	
	} 	
}

var result = pluralizer(5, "cat");

console.log(result);