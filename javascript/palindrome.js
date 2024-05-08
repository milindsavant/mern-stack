let num=1221;
let num2=num;
let sum=0,rem=0;

while(num2!=0)
{
    rem=num2%10;
    sum=sum*10+rem;
    num2=Math.floor(num2/10);
}
if(num==sum){
    console.log("The number is palindrome");
}
else{
    console.log("The number is not palindrome");
}

