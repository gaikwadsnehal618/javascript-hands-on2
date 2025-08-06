function  greaterNumber(x,y){
    x>y?console.log(`${x} is grater than ${y}`)
    :console.log(`${y} is greater than ${x}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("=================================");
function isEvenOrOddNum(num){
    return num % 2===0
    ?console.log(`${num} is even` ,true)
    :console.log(`${num} is odd` ,false);
}
isEvenOrOddNum("29");
isEvenOrOddNum("44");
isEvenOrOddNum("0");
isEvenOrOddNum("101");
console.log("=====================");
function wordLength(word){
    return word.length%2===0
    ?console.log(`${word} has even Length`)
    :console.log(`${word} has odd Length`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
