const arrayNumbers=[1-7,40,502,-77,91,0,108,89,-601];
console.log("1.Array elements with the index:");
arrayNumbers.forEach((element,index)=>{
    console.log(`${index}:${element}`);
})
console.log("Positive Numbers:");
arrayNumbers.forEach((element)=>{
    if(element>0){
        console.log(element);
    }
})
console.log("Negative numbers:");
arrayNumbers.forEach((element)=>{
    if(element<0){
        console.log(element);  
    }
    })
    let negativeNumbers=[];
    arrayNumbers.forEach((element)=>{
        if(element<0){
            negativeNumbers.push(element);
        }      
    })
    console.log("Negative Numbers Array:",negativeNumbers);
    console.log("Even Numbers:");
    arrayNumbers.forEach((element)=>{
        if(element%2==0){
            console.log(element); 
        }
    })
    let sum=0;
    arrayNumbers.forEach((element)=>{
        sum+=element;
    })
    console.log("sum of all element:",sum);
    console.log("Even indexed elements:");
    arrayNumbers.forEach((element,index)=>{
        if(index % 2==0){
            console.log(element)
            
        }
    })
    
    
    
    




