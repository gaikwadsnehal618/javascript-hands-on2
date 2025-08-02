console.log("===========Task: 1==========")
var square=function(num){
    return num*num;
}
console.log("Squares:");
console.log("square of 5 is:" ,square(5));
console.log("square of 6 is:" , square(6));
console.log("square of 25 is:" , square(25));
console.log("square of  100 is:" , square(100));
console.log("square of 67 is:" , square(67));
console.log("square of 89 is:" , square(89));
console.log("square of 59 is:" , square(59));
console.log("==========Task:2=========")
console.log("Type of 'square' function:",typeof square);
var area=function(length,width){
    return length*width;
}
console.log("Area of rectangle:" +area(499,917));
console.log("============Task:3============");
var swapvalues=function(val1,val2) {
    console.log("Before swap:" , val1,val2);
    let temp=val1;
    val1 = val2;
    val2 = temp;
    console.log("After swap:" ,val1,val2);
}
swapvalues("Mahi","Raina");
swapvalues(55,77);
console.log("===========Task 4:===========")
var stringOps=function(str){
    console.log("Orignal string:" +str);
    console.log("Total chracters:" +str.length);
    console.log("character at index 6:" ,str.charAt(6));
    console.log("character at index 11:" ,str.charAt(11));
    console.log("Last character:" ,str.charAt(str.length-1));
    console.log("first chracter:" ,str.charAt(0));
    console.log("Third last character:" ,str.charAt(str.length-3));
    var words=str.split(" ");
    var wordCount=words.length;
    var squareOfWords=wordCount*wordCount;
    console.log("Total words:" , wordCount,"square of wordCount:",squareOfWords);
}
stringOps("JS is the most popular language of internet");
