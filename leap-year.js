function isLeapYear(year){
    const remainder=year%4;
    if(remainder==0){
        return true;
        // console.log('Your year is leap year', year)
    }
    else{
        return false;
        // console.log('Your yera is not leap year', year)
    }
}

// isLeapYear(1243)

var ourYear=isLeapYear(1242);
console.log( 'our year' ,ourYear)
var hersYear=isLeapYear(2020);
console.log( 'They are year', hersYear)
