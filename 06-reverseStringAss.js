function reverseString(str){
    let reversed ="";
    for(let i = str.length-1;i>=0;i--){
        let char = str.charAt(i);
        if(char !==""){
            reversed += char;

        }
    }
    return reversed;
}
let string1="Hard work always pays back";
let string2="Soon I will be Angular IT champ";
let result1=reverseString(string1);
let ressult2=reverseString(string2);
console.log("Given string 1:",string1);
console.log("Reversed without space:",result1);
console.log("Given string 2:",string2);
console.log("String after reversing:",ressult2);
