let arr = [2, 2, 3, 5, 5, 5, 1, 6];
let len = arr.length;
let count;
arr = arr.sort((a, b) => (a - b)); //  1 2 2 3 5 5 5 6
// console.log(arr);
for (i = 0; i < len; i++) {
    count = 0;
    for(j=i;j<len;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
        else
        break;
    }
    i=i+count-1;
    console.log(arr[i] + " => " + count);
}

// let str = "Milind";
// str = str.split("");
// // console.log(str);
// // str.forEach(element => console.log(element));
// // for (const value of str) {
// //     console.log(value);
// // }
