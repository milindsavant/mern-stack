let str = "CbacdBB";
let str2 = "BaBbcdC";

str = str.split("");
str2 = str2.split("");

str.sort();
str2.sort();

let len=str.length , len2=str2.length;
let flag=1;
if(len!=len2){
    flag=0;
}
else{
    for(i=0;i<len;i++)
    {
        if(str[i]!=str2[i])
        {
            flag=0;
            break;
        }
    }
}

if(flag)
{
    console.log(str,str2,"The given string is an anagram");
}
else
{
    console.log(str,str2,"The given string is not an anagram");
}
