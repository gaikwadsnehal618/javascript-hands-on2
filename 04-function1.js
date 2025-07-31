console.log("=========Function Assignment=========");
console.log("=======Task 1: function without parameter and return type=======");
function greet(){
    console.log("Welcome in pune!");
}
greet();
function showPlace(){
    console.log("Sangola");
}
showPlace();
console.log("=========Task 2:Function with Parameters==========");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("collegeName: " + collegeName);
}
personalDetails("Snehal","Gaikwad","Sangola Mahavidyalay Sangola");
console.log("========Task 3:function with parameter and return type=======");
function addThreeValues(val1,val2,val3){
    console.log("+ Result of addition: ",val1+val2+val3);
}
addThreeValues(10.23,600,40);
function addThreeValues(val1,val2,val3){
    console.log(" Result of String: " ,val1+val2+val3);
 }
 addThreeValues("Hello","Good","Morning");