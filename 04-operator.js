function squareOfWordLength(word){
    var length=word.length;
    var result=length*length;
    console.log(`The length of word is "${word}" is ${length} and its square is ${result}`);
    return result;
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web developer Smart");
function stringOperations(){
    var str="I am MERN stack developer";
    var length=str.length;
    var words=str.split(" ").length;
    var divideResult=length / words;
    var multiplyResult=length * words;
    console.log(`Given string is: "${str}"`);
    console.log(`Length of string is: ${length}`);
    console.log(`The total words of length is: ${words}`);
console.log(`Length divide by total words: ${divideResult}`);
console.log (`Length multiply by total words: ${multiplyResult}`);

}
stringOperations();

