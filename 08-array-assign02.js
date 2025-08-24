const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("1. Total elements:", arrayNumbers.length);
console.log("2. First element:", arrayNumbers[0]);
console.log("   Last element:", arrayNumbers[arrayNumbers.length - 1]);
console.log("3. Third last element:", arrayNumbers[arrayNumbers.length - 3]);
console.log("4. Even numbers:");
arrayNumbers.forEach(num => {
    if (num % 2 === 0) console.log(num);
});
console.log("5. Odd numbers:");
arrayNumbers.forEach(num => {
    if (num % 2 !== 0) console.log(num);
});
let evenPosSum = 0;
let evenPos = [];
for (let i = 0; i < arrayNumbers.length; i++) {
    if (i % 2 === 0) {
        console.log(arrayNumbers[i]); 
        evenPosSum += arrayNumbers[i];
        evenPos.push(arrayNumbers[i]);
    }
}
console.log("   Sum:", evenPosSum);
let oddPosSum = 0;
let oddPos = [];
console.log("7. Odd positioned elements:");
for (let i = 0; i < arrayNumbers.length; i++) {
    if (i % 2 !== 0) {
        console.log(arrayNumbers[i]);
        oddPosSum += arrayNumbers[i];
        oddPos.push(arrayNumbers[i]);
    }
}
console.log("   Sum:", oddPosSum);
let totalSum = 0;
for (let num of arrayNumbers) {
    totalSum += num;
}
console.log("8. Sum of all elements:", totalSum);

// 9. Multiples of 5
console.log("9. Multiples of 5:");
arrayNumbers.forEach(num => {
    if (num % 5 === 0) console.log(num);
});
console.log("10. Is 115 available?", arrayNumbers.includes(115));
console.log("11. Is 23 available?", arrayNumbers.includes(23));
arrayNumbers.splice(3, 0, 55, 66);
console.log("12. After inserting 55, 66 at index 3:", arrayNumbers);
arrayNumbers.splice(4, 3);
console.log("13. After deleting 3 elements from index 4:", arrayNumbers);

    
    
    
    
    
    
    
    

    






