function substring(str, start, end){
let result = ""
result+= str.substring(start, start+end);
console.log(result);
}
substring('ASentence', 1, 8)