// Increment all numbers in dictionary

"use strict"

const inc_numbers = (format_complete) => {
   	for (let key in format_complete) {
      		if (typeof format_complete[key] === "number"){
      			format_complete[key]++;
      		}
  	}
  	return dict;
 };


const result = inc_numbers({ a: 1, b: 2, c: 'hello', d: false });
console.log(result);
