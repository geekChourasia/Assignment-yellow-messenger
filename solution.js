 
// input String
let inputString="eight one two four five three seven  ";

var objectMap = {
	'zero': 0,
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9,
};


// we want all input should be same case otherwise it does not matches with key
inputString=inputString.toLowerCase();

//handling case spaces at the last
inputString=inputString.trim();

//so it will coverted to an array, so we can loop word to word 
let StringArr=inputString.split(' ');

//we created an empty array so that we can push the value of objectMap
let finalArr=[];

for(let singleWord of StringArr){
	if(objectMap[singleWord]){
		finalArr.push(objectMap[singleWord]);
	}else{
		throw new Error('invalid input');
	}
}

console.log(finalArr.join(''));
//finally output is 8124537
