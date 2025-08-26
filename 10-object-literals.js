let person={
    firstName:"Elon",
    LastName : "musk",
    age: 55,
    isMarried:true,
    designation:"CEO",
    Companies:["Tesla","SpaceX","Boing","Neueralink"]
}
console.log(person);
console.table(person);
console.log("==============Accesing or reading object properties=========");
console.log("===========using . dot notation=======");
const firstName=person.firstName;
console.log(`person First name :${firstName}`);
console.log("==========Adding properties into the object=========");
person.networth="4 trillion $";
console.log("==================Deleting proprties into object=========");
delete person.dessignation;
console.log("========updating the properties into object");
person.age="58";
console.log(person);
person.Companies.push("optimus");
console.log(person.Companies);
for (const elements of person.Companies){
    console.log(elements)
}
console.log("=====Create an empty object=========");

    







