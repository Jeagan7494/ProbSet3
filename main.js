//1. Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.

// var palindrome = function(str) {
// 	return str === str.split('').reverse().join('')
// }
// console.log(palindrome('please'))
// console.log(palindrome('racecar'))
// console.log(palindrome('avid diva'))

//============================================================//

//Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".

var dashInsert = function(number) {
	var output = [];

	for( var i = 0; i < number.length; i++) {
		if( number[i] % 2 === 1 && number[i+1] % 2 === 1) {
			output.push(number[i] + '-') 

		} else {
			output.push(number[i])
		}
	} 	
	return output.join('');
}
console.log(dashInsert('454793'))