function factorial(number){
    let result=1;
    let num=number;
    while(num>=1){
        result=result*num;
        num--;
        console.log(num)
    }
    return result;
}
 const fun=9;
 const fact=factorial(fun);
 console.log(fact)