//Write a Program to show Sum of three Integer adds to ZERO
let arr = [0, -1, 2, -3, 1];

for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        for(k=j+1;k<arr.length;k++)
        {
            if(arr[i]+arr[j]+arr[k]==0)
            {
                console.log("Numbers Are:")
                console.log(arr[i])
                console.log(arr[j])
                console.log(arr[k])
                break;
            }
        }
    }
}