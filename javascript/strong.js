let a=145;
let num=a;
let i,j,mul=1,rem,sum=0;

while(num!=0) 
{
    mul=1;
    rem = num % 10;    
    for(i=rem;i>=1;i--)
    {
        mul*=i;
    }    
    sum+=mul;
    num = Math.floor(num/10);   
}
if(a==sum)
console.log(`The given number is strong`);
else
console.log(`The given number is not a strong number`);