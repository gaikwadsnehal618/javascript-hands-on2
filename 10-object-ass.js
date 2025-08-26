
let professor = {
    name: "Dr. Rajesh Sharma",
    age: 50,
    subject: "Computer Science",
    college: "Pune University",
    email: "rajesh.sharma@pu.edu",
    degrees: {
        engineering: "CSC",
        masters: "IT",
        phd: "Adv Computing",
        diploma: "AI & ML"
    },
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};
console.log("Professor Object:", professor);

console.log("---------------------------------------");

professor.totalExperience = "14 years";
console.log("After adding totalExperience:", professor);

console.log("-------------------------------------");

professor.subject = "Data Science";
console.log("After modifying subject:", professor);
console.log("----------------------------------");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After adding new certificate:", professor.certificates);
console.log("-----------------------------------");
console.log("Last certificate:", professor.certificates[professor.certificates.length - 1]);
console.log("------------------------------------");
console.log("All Certificates:");
for (let i = 0; i < professor.certificates.length; i++) {
    console.log(professor.certificates[i]);
}