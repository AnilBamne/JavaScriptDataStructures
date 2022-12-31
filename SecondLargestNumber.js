///  Array DS  ///
console.log("Welcome to Datastructure programs");
//uc1 find the 2nd largest and the 2nd smallest element without sorting the array.
let num;
let arr=new Array();

function randomNum()
{
    return Math.floor(Math.random()*900)+100;       //three digit rendom num
}

for(i=0;i<10;i++)
{
    arr.push(randomNum());
}

size=arr.length
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("After Sorting:");
arr.sort();

for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

console.log("2nd Largest Number is:")
console.log(arr[size-2]);
console.log("2nd Smallest Number is:")
console.log(arr[1]);