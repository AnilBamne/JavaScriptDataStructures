//Take a range from 0 – 100, find the digits that are repeated twice 
//like 33, 77,etc and store them in an array
let n=100;
let i;
let arr =new Array();
for(i=1;i<=n;i++)
{
    if(i%11==0)
    {
        arr.push(i);
    }
}
console.log("Repeated numbers are :"+arr)