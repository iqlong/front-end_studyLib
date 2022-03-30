// 输入n，根据下面的规则，输出1-n的字符串表示，若不成立原样输出
    let n=readline();
    for(var x=1;x<=n;x++) {
        if(x%3==0 && x%5!=0) {
            console.log('Fizz')
        }
        else if(x%5==0 && x%3!=0) {
            console.log('Buzz')
        }
        else if(x%5==0 && x%3==0)
            console.log('FizzBuzz')
        else 
            console.log(x)
    }
