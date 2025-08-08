
function countCharA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }
    console.log(`The given string is: "${str}"`);
    console.log(`Total number of 'a' or 'A': ${count}`);
    console.log('--------------------------');
    return count;
}

let string1 = "I AM Learning JavaScript, The Language of internet";
let string2 = "My favourite movie is LAggAn";


countCharA(string1);
countCharA(string2);
