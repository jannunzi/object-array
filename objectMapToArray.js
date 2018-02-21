var map = require('./map.json');
var maxDepth = 3;
var array = convertObjectMapToNestedArray(map, 0, maxDepth, 'r180');
console.log(JSON.stringify(array));

/*
[
	{
		value: 15,
		children: [
			{
				value: 10,
				children: []
			},
			{
				value: 20,
				children: []
			}
		]
	},
	{
		value: 35,
		children: [
			{
				value: 30,
				children: []
			},
			{
				value: 40,
				children: []
			}
		]
	}
]
*/
function recursiveAverage(array) {
	for(var r in array) {
		// var average = 0;
		// var total;
		if(array[r].children.length > 0) {
			array[r].value = 0;
			for(var c in array[r].children) {
				array[r].value += recursiveAverage(array[r].children);//array[r].children[c].value;
			}
			array[r].value /= array[r].children.length;
		}
		return array[r].value;
	}
	// return array[r].value;
	// if(array.children.length === 0) {
	// 	return 
	// }
	// for(var r in array) {
	// 	if(array[r].children.length > 0) {
	// 		if(!array[r].value) {
	// 			array[r].value = recursiveAverage(array[r].children);
	// 		}
	// 	} else {
	// 		return array[r].value;
	// 	}
	// }
	// array.value /= array.length;
}

function convertObjectMapToNestedArray(map, currentDepth, maxDepth, product) {
	var array = [];
	if(!map || currentDepth === maxDepth) {
		return array;
	}
	for(var key in map) {
		var children = convertObjectMapToNestedArray(map[key], currentDepth+1, maxDepth, product);
		var object = {};
		if(currentDepth === maxDepth - 1) {
			object = map[key];
			object.value = 0;
			if(object[product]) {
				object.value = 100.0 * object[product].correct / object[product].total;
			} else {
				continue;
			}
		}
		object.label = key;
		object.children = children;

		array.push(object);
	}
	return array;
}