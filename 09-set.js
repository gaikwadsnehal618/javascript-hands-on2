const students=new Map();
students.set(11,"Elon");
students.set(22,"Bill");
students.set(33,"Jeft");
students.set(44,"Larry");
students.set(55,"stew");
students.set(66,"Mark");
console.log(students);
console.log("======Total entries:${students size}=====");
console.log("======Adding the duplicate key======");
students.set(44,"Ratan");
console.log(students);
console.table(students);







