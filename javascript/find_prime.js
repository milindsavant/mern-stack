let arr = [1,2,5,6,7,9,10,11,15,3,13];
let i,j,flag;
arr.sort(function(a,b){return a-b});

for(i=0;i<arr.length;i++)
{
    flag=1;
    if(arr[i]==1)
    {
        flag=0;
    }
    for(j=2;j<arr[i];j++)
    {
        if(arr[i]%j==0)
        {
            flag=0;
            break;
        }
    }
    
    if(flag)
    {
        console.log(arr[i]);
    }
}