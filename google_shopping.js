var data = require("./products.json")

// Write your solutions below (Solution 1)

var instances = 0;
var items = data['items'];

for (var i = 0; i < items.length; i++ ){
  if (items[i]['kind'] === 'shopping#product'){
  instances += 1;
  }
}
console.log(instances);

var itemCount = data["currentItemCount"];
console.log(itemCount);

//Solution 2

var items = data['items'];
var instances = 0;

for (var i = 0; i < items.length; i++ ) {
  if (items[i]['product']['inventories'][0]['availability'] === 'backorder'){
    console.log("Sorry this product is unavailable")
  }
}

// Soluction 3

var items = data['items'];
var instances = 0;

for(var i = 0; i < items.length; i++ ){
  if(items[i]['product']['images'].length > 1){
    console.log(items[i]);
      instances++;
    console.log(instances);
  }
}

// Solution 4

var items = data['items'];
var instances = 0;

for(var i = 0; i < items.length; i++){
	if(items[i]['product']['brand'] === 'Canon'){
		console.log(items[i]);
		  instances++;
		console.log(instances);
	}
}

// Solution 5

var items = data['items'];
var instances = 0;

for(var i = 0; i < items.length; i++){
	if(items[i]['product']['author']['name'] === 'eBay' && items[i]['product']['brand'] === 'Canon'){
		console.log(items[i]);
			instances++ ;
		console.log(instances);
	}
}


// Solution 6

var items = data['items'];

for(i = 0; i < items.length; i++){
  console.log(items[i]['product']['brand']);
  console.log(items[i]['product']['inventories'][0]['price']);
  console.log(items[i]['product']['images'][0]['link'] + "\n");
}
//console.log(data["items"]);