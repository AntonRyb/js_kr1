function memoizate(func) {
	// Map with func args as keys and func result as values
	let argsMap = {};

	return function(...args) {
		let argsString = JSON.stringify(args)
		if (argsMap.hasOwnProperty(argsString)) {
			return argsMap[argsString]
		}
		let result = func(...args);
		argsMap[argsString] = result;
		return result;
	}
}

function sum(a, b) {
	console.log('Called sum', a, b);
	return a + b;
}


function somethingHard(n) {
	console.log('Called somethingHard', n); 
	let a = 0;
	for (let i = 0; i < n; i++) {
		a++;
	}

	return a;
}

let memoSum = memoizate(sum);
let memoSmthHard = memoizate(somethingHard);

console.log(memoSum(1, 2));
console.log(memoSum(3, 4));
console.log(memoSum(1, 2));
console.log(memoSum(3, 4));

console.log(memoSmthHard(1e7));
console.log(memoSmthHard(1e7));



