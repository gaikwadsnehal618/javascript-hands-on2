
let bankSbi = {
  fullName: "Sandeep mane",
  accountNo: 20381742059,
  mobileNo: 9908675445,
  branchName: "Solapur"
};
console.log(bankSbi);
let bankLocation = {
  street: "Shivajinagar",
  city: "sangola",
  pin: 413309
};
console.log(bankLocation);
let cloneBankSbi = Object.assign({}, bankSbi);
let cloneBankLocation = Object.assign({}, bankLocation);

console.log("Cloned Bank SBI:", cloneBankSbi);
console.log("Cloned Bank Location:", cloneBankLocation);
let rateOfInterest = {
  homeLoanInterest: "9.5%",
  personalLoanInterest: "20%",
  dueInterest: "15%"
};
console.log(rateOfInterest)
let sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log("Merge object bankSbi, bankLocation & rateOfInterest");
console.table(sbiDetails); 
console.log("===========Traverse object using for in loop===========");
for (let key in sbiDetails) {
  console.log(`${key}: ${sbiDetails[key]}`);
}