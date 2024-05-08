let num = 12;
let num2 = num;
let len=0,sum=0,rem=0;
while(num2!=0)
{
    num2=Math.floor(num2/10);
    len++;
}
num2=num;
// console.log(`The length of the number : ${len}`);
while(num2!=0)
{
    rem=num2%10; 
    num2=Math.floor(num2/10);
    sum+=Math.pow(rem,len); 
}
if(sum==num){
    console.log("This is an armstrong number");
}
else{
    console.log("This is not an armstrong number");
}
// Iterates the problem in steps. It becomes easy to solve.