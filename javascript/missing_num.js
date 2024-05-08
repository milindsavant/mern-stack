let arr=[3,5,1];
let len=arr.length;
let temp,i,j,k;

for(i=0;i<len;i++)
{
    for(j=i+1;j<len;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

for(i=0;i<len;i++)
{
    console.log(arr[i]);
}





