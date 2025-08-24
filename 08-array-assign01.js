
const fruits=["banana","orange","Apple","mango","Watermalon"];
console.log("orignal Array is:",fruits);
console.log("---------------------------------");
console.log("first Element:",fruits[0]);
console.log("Last Element:",fruits[fruits.length-1]);
console.log("------------------------------------");
fruits.unshift("Papaya");
console.log("After adding papya:",fruits);
const mangoIndex=fruits.indexOf("mango");
if(mangoIndex!== -1){
    fruits.splice(mangoIndex,1);

}
console.log("------------------------------");
console.log("After removing Mango:",fruits);
console.log("-----------------------------");
fruits.push("Pineapple");
console.log("After adding pineapple:",fruits);
console.log("----------------------------------");
const wmIndex=fruits.indexOf("Water Melon");
if(wmIndex !== -1){
    fruits.splice(wmIndex,0,"Dragon fruit");

}
console.log("After inserting the dragon fruit:",fruits);
console.log("----------------------------------------------");
const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex  !== -1){
    fruits[orangeIndex]="Kiwi";
}
console.log("After replacing Orange with Kiwi:",fruits);
console.log("-------------------------------------------");
console.log("Element from index 1 to 4:",fruits.slice(1,5));
console.log("Last 3 elements:",fruits.slice(fruits.length-3));








