/* Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for minimum times */
let map=new Map();
let maxcnt=10;
let onecnt=0,twocnt=0,threecnt=0,fourcnt=0,fivecnt=0,sixcnt=0;

bool=true;
while(bool)
{
    let ran=Math.floor(Math.random()*6+1)
    switch(ran)
    {
        case 1:
            if(onecnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                onecnt++;
            }
            break;
        case 2:
            if(twocnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                twocnt++;
            }
            break;
        case 3:
            if(threecnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                threecnt++;
            }
            break;
        case 4:
            if(fourcnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                fourcnt++;
            }
            break;
        case 5:
            if(fivecnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                fivecnt++;
            }
            break;
        case 6:
            if(sixcnt==maxcnt)
            {
                bool=false;
            }
            else
            {
                sixcnt++;
            }
            break;
    }
}
map.set(1,onecnt);
map.set(2,twocnt);
map.set(3,threecnt);
map.set(4,fourcnt);
map.set(5,fivecnt);
map.set(6,sixcnt);
console.log(map)

let minTimes=Math.min(...map.values());
let maxTimes=Math.max(...map.values());

function getKey(value) 
{
    return [...map].find(([key, val]) => val == value)
}

console.log("Maximum Times Is:"+ getKey(maxTimes));
console.log("Minimum Times Is:"+ getKey(minTimes));
