let s='12:01:00AM';
let type = s.slice(-2);
let hour = s.slice(0,2);
let min = s.slice(3,5);
let sec = s.slice(6,8);
if(hour==12 && (type=='AM'))
{
    hour='00';
}
if(hour<12 && (type=='PM'))
{
    hour=parseInt(hour);
    hour+=12;
    hour=hour.toString();
}
let date = hour + ":" + min + ":" + sec;
console.log(date);