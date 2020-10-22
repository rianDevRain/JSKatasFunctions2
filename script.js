/** @format */

const add = (x, y) => x + y;



const multiply = (adder, looper) => {
	let answer = 0;
	for (let i = 0; i < looper; i++) {
		answer = add(adder, answer);
	}
	return answer;
};


const power = (x, n) => {
	let answer = 1;
	for (let i = 0; i < n; i++) {
		
		answer = multiply(x, answer);
	}
	return answer;
};



const factorial = (n) => {
	let answer = n;
	for (let i = add(n, -1); i >= 1; i--) {
		answer = multiply(answer, i);
	}
	return answer;
};



const fibonacci = (n) => {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		let [answer, f1, f2] = [0, 0, 1];
		for (let i = 1; i < n; i++) {
			answer = f2;
			f2 = add(f1, f2);
			f1 = answer;
		}
		return answer;
	}
};
// console.log(fibonacci(8));
// const addOneInput = document.querySelector("#add1");
// const addTwoInput = document.querySelector("#add2");
// const multOneInput = document.querySelector("#multi1");
// const multTwoInput = document.querySelector("#multi2");
// const powOneInput = document.querySelector("#pow1");
// const powTwoInput = document.querySelector("#pow2");
// const factInput = document.querySelector("#factNum");
// const faboInput = document.querySelector("#fiboNum");

// const showAdd = document.querySelector("#clickAdd");

// const showAddCode = document.querySelector("#clickAddShow");
// const showMulti = document.querySelector("#clickMult");
// const showMultiCode = document.querySelector("#clickMultShow");
// const showPow = document.querySelector("#clickPow");
// const showPowCode = document.querySelector("#clickPowShow");
// const showFact = document.querySelector("#clickFact");
// const showFactCode = document.querySelector("#clickFactShow");
// const showFibo = document.querySelector("#clickFibo");
// const showFiboCode = document.querySelector("#clickFiboNum");
