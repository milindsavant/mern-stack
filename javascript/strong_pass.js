    let password='jk@12';
    let n=password.length;
    password=password.split('');
    numbers = "0123456789";
    numbers=numbers.split('');
    lower_case = "abcdefghijklmnopqrstuvwxyz";
    lower_case=lower_case.split('');
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upper_case=upper_case.split('');
    special_characters = "!@#$%^&*()-+";
    special_characters=special_characters.split('');
    let i,j,need=0,count=0,flag=0,num_count=1,lower_count=1,upper_count=1,sp_count=1;
    if(6-n<6)
    {
        var len=6-n;
    }
        password.forEach((val)=>{
        numbers.forEach((nums)=>{
            if(val==nums)
            num_count++;
        })
        lower_case.forEach((small)=>{
            if(val==small)
            lower_count++;
        })
        upper_case.forEach((big)=>{
            if(val==big)
            upper_count++;
        })
        special_characters.forEach((sp)=>{
            if(val==sp)
            sp_count++;
        })

    })
    let arr = [num_count,lower_count,upper_count,sp_count];
    arr.forEach((req)=>{
        if(req==1)
        need++;
    })
    if(len>need)
    console.log(len);
    else
    console.log(need);

    