module.exports = function check(str, bracketsConfig) {
	let result = false;
	let str_check = ""+str;
	let pairs = str_check.length/2; // half of initial string length  equal to maximum number of paired brackets (type dont matter)
	for (let i = 0; i < bracketsConfig.length; i++){
		// list of all possible bracket combinations '()' '[]' '{}' '||' ...
		bracketsConfig[i] = bracketsConfig[i][0]+bracketsConfig[i][1];
	}
	for (let k = 0; k < pairs; k++) {
		// for every potential pair need to do following loop:
		for (const bracket_pair of bracketsConfig) {
			// check every possible bracket comb and replace
			str_check = str_check.replace(bracket_pair,""); // if there is no pair - replace simply wont work, so valid result at the end should be empty
		}
	}
	str_check.length===0 ? result=true : result=false;
	return result;
}
