function Bank (bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
let  yesBank=new Bank("yesBank","pune","YES5674839290",2222)
console.log(yesBank);
let sbiBank=new Bank("sbiBank","Mumbai","HDO5674839290",3333)
console.log(sbiBank);
let axisBank=new Bank("axisBank","solapur","SDE5674839290",4444)
console.log(axisBank);
let mahBank=new Bank("mahBank","Delhi","CFE5674839290",5555)
console.log(mahBank);
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`SBI  Bank timing:openTime=${sbiBank.openTime},closeTime=${sbiBank.closeTime}`);
console.log(`Axis  Bank timing:openTime=${axisBank.openTime},closeTime=${axisBank.closeTime}`);
console.log(`yes  Bank timing:openTime=${yesBank.openTime},closeTime=${yesBank.closeTime}`);