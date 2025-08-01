console.log("======string Assignment:02=====");
function stringHandsOn(){
    const str="Hey you are doing good,keep it up";
console.log("string:" +str);
console.log("length of string is:" +str.length);
console.log("Removing the leading and trailing extra spaces in the given string is:" +str);
var trimStr=str.trim();
console.log("length after trim:"+trimStr.length);
var firstChar=trimStr.charAt(0);
var lastChar=trimStr.charAt(trimStr.length-1);
console.log("first character:" +firstChar);
console.log("last Character:" +lastChar);
var words=trimStr.split("");
console.log("Total number of words:" +words.length);
var substringFrom22=trimStr.substring(22);
console.log("Substring starting from index 22:" +substringFrom22);
var endsWithUp=trimStr.endsWith("up");
console.log("Does string ends with up:" +endsWithUp);
var startsWithHey=trimStr.startsWith("hey");
console.log("Does string starts with hey:" +startsWithHey);
}
stringHandsOn();