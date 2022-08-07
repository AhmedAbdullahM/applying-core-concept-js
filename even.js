function isEven(number){
    const remainder=number%2;
    
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
 
const myNumberIsEven= isEven(303);
const herNumberIsEven= isEven(308);
console.log(myNumberIsEven)
console.log('her number', herNumberIsEven)