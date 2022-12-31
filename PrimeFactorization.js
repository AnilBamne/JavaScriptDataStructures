//uc3 Find prime factors of a number and store in array
// Number for finding factors is 
let number=135;
let factor=1;
let factorsArray=new Array();

// finding factors
while(factor<=number)
{
    if(number%factor ==0)
    {
        factorsArray.push(factor);
        number=number/factor;
    }
    factor=factor+1;
}
console.log("Prime factors are :")
console.log(factorsArray);