
let person = {
    firstName: 'Sergio',
    lastName: 'Marquina',
    age: 48,
    gender: 'Male',
    department: 'Computer',
    certificates: [
        'Hacker Rank Participation',
        'certificate in IFF course',
        'Certificate in Adv programming'
    ],
    degrees: {
        engineering: 'CSC',
        PHD: 'Adv Computing',
        bachelors: 'B.Sc',
        masters: 'M.Sc'
    }
};

console.table(person);

person.totalExperience = '14 years';
console.log("===== Add new property totalExperience =====");
console.table(person);
console.log("===== Before Modify lastName property =====");
const lastName=person.lastName;
console.log(`person last name:${lastName}`);
person.lastName = 'Morte';
console.log("===== After Modify lastName property =====");
console.log(person.lastName);
console.log("===== Before Add new certificate =====");
console.log(person.certificates);

person.certificates.push('Oracle Certified');
console.log("===== Add new certificate at end =====");
console.log(person.certificates);
person.certificates.splice(2, 0, 'Oracle Certified');
console.log("===== Add new certificate at 2nd index =====");
console.log(person.certificates);
console.log("===== Last element of certificates =====");
console.log(person.certificates[person.certificates.length - 1]);
console.log("===== Traverse elements of certificates =====");
person.certificates.forEach(c => console.log(c));