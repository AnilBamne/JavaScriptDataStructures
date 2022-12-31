/// uc2 Find second largest and second smallest without sorting array
let arr=new Array();

function randomNum()
{
    return Math.floor(Math.random()*900)+100;       //three digit rendom num
}
//Adding numbers to array
for(i=0;i<10;i++)
{
    arr.push(randomNum());
}
//printing array
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
let n = arr.length;
print2largest(arr, n);
print2Smallest(arr,n);

// Function to print the second largest elements
function print2largest(arr, arr_size)
    {
    let i;
    let largest = second = 0;

    // finding the largest element
    for (i = 0;i<arr_size;i++)
    {
        if (arr[i]>largest)
        {
            largest = arr[i];
        }
    }

    // Now find the second largest element
    for (i = 0 ;i<arr_size;i++)
    {
        if (arr[i]>second && arr[i]<largest)
        {
            second = arr[i];
        }
    }

    if (second == 0)
    {
        
        console.log("There is no second largest element<br>");
    }
    else
    {
        console.log("The second largest element is " + second);
        return;
    }
}

// Function to print the second largest elements
function print2Smallest(arr,arr_size)
{
    let i;
    let smallest=second=1000;
    // finding the largest element
    for (i = 0;i<arr_size;i++)
    {
        if (arr[i]<smallest)
        {
            smallest = arr[i];
        }
    }
    
     // Now find the second smallest element
    for (i = 0 ;i<arr_size;i++)
    {
        if (arr[i]<second && arr[i]>smallest)
        {
            second = arr[i];
        }
    }

    if (second == 1000)
    {
        
        console.log("There is no second smallest element<br>");
    }
    else
    {
        console.log("The second smallest element is " + second);
        return;
    }
}