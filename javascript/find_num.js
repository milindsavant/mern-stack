function mergeTwo(list1,list2)
{
    let i,j,x=0;
    let len1=0,len2=0;
    let arr=[];
    for(i=0;list1[i]!=null;i++)
    {
        len1++;
    }
    for(i=0;list2[i]!=null;i++)
    {
        len2++;
    }
    let total=len1+len2;
    for(i=0;i<len1;i++)
    {
        arr[x]=list1[i];
        x++;
    }
    for(i=0;i<len2;i++)
    {
        arr[x]=list2[i];
        x++;
    }

    let temp;
    for(i=0;i<total;i++)
    {
        for(j=i+1;j<total;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
let list1 = [1,2,3];
let list2 = [7,5,6];
let res = mergeTwo(list1,list2);
console.log(res);
// console.log(arr) ;
// let len1=list1.length;
// let len2=list2.length;
// let total=len1+len2;

// for(i=len1,j=0;i<total;i++,j++)
// {
//     list1[i]=list2[j];
// }

// let temp;
// for(i=0;i<total;i++)
// {
//     for(j=i+1;j<total;j++)
//     {
//         if(list1[i]>list1[j])
//         {
//             temp=list1[i];
//             list1[i]=list1[j];
//             list1[j]=temp;
//         }
//     }
// }
// console.log(list1);