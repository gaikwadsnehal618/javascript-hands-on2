function maleMarriageEligiblity(gender,age,boyName){
    var result =(gender === "Male" && age>=21)
    ?console.log(`Hey ${boyName} you are eligible for marriage`)
    :console.log(`Hey ${boyName} you are not eligible for marriage`);

}
maleMarriageEligiblity("Male" ,25, "Billgates");
maleMarriageEligiblity("Male" ,17, "Stew jobs");
console.log("==============================");
function femaleMarriageEligiblity(gender,age,girlName){
    var result=(gender === "Female" &&age >=18)
    ?console.log(`Hey ${girlName} you are eligible for marriage`)
    :console.log(`Hey ${girlName} you are not eligible for marriage`);

}
femaleMarriageEligiblity("female",16,"Jenifier");
femaleMarriageEligiblity("female",27,"Malinda Gates");