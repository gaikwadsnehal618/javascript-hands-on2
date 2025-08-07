
const checkEvenOrOdd = function (num) {
    if (num % 2 === 0) {
        console.log(num + " is EVEN");
    } else {
        console.log(num + " is ODD");
    }
};
const checkVotingEligibility = function (age) {
    if (age >= 18) {
        console.log("Age " + age + ": Eligible for Voting");
    } else {
        console.log("Age " + age + ": Not Eligible for Voting");
    }
};
const checkStringLength = function (str) {
    if (str.length > 10) {
        console.log('"' + str + '" has more than 10 characters');
    } else {
        console.log('"' + str + '" has 10 or fewer characters');
    }
};

const checkStartsWithJava = function (text) {
    if (text.startsWith("Java")) {
        console.log('"' + text + '" starts with "Java"');
    } else {
        console.log('"' + text + '" does NOT start with "Java"');
    }
};
console.log("=== Task 1: EVEN or ODD ===");
checkEvenOrOdd(45);
checkEvenOrOdd(70);
checkEvenOrOdd(67);
checkEvenOrOdd(98);

console.log("\n=== Task 2: Voting Eligibility ===");
checkVotingEligibility(18);
checkVotingEligibility(20);
checkVotingEligibility(17);
checkVotingEligibility(40);

console.log("\n=== Task 3: String Length Check ===");
checkStringLength("JavaScript - ES6");
checkStringLength("Hello");

console.log("\n=== Task 4: Starts With 'Java' ===");
checkStartsWithJava("JavaScript Language");
checkStartsWithJava("Programming Language");