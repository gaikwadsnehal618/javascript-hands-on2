console.log("==========variable Declearation=========");

    var n1;
    let n2;
    console.log("=========variable Declearation and Initilization at the ");
    console.log("=======scope========");
    function addition(){
        var numOne=10;
        let numtwo=20;
        const numthree=30;
        console.log(`sum of${numOne},${numtwo},${numthree} is:${numOne+numtwo+numthree}`);

    }
    let isMarried=true;
    if (isMarried){
        let budget= "1CR";
        var expences= "50LAKH";
        const amountRemaning="50Lakh";
        console.log(`Total budget is:${budget}`);
        console.log(`Total excpected expences is:${expences}`);
        console.log(`Total Remaining is:${amountRemaning}`);
       

    }
    




