function factorialOfNum(num){
    if(num==null||num==undefined||isNaN(num)||num<0){
        console.log(`Inavalid input:${num}`);
        return null;
    }
    if(num==0){
        console.log(`factorial of 0 is 1`);
        return 1;
    }
        let fact=1;
        for(let i=1;i<=num;i++){
            fact*=i;
        }
        console.log(`factorial of ${num} is ${fact}`);
        return fact;
    
}
    factorialOfNum(5);
    factorialOfNum(3);
    factorialOfNum(null);
    factorialOfNum(8);
    factorialOfNum(undefined);
    factorialOfNum(9);
    factorialOfNum(0);
