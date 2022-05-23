    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
     var isMatch = function(s, p) {
        if(s=='' && p=='') {
            return true;
        }else if(s!='' && p=='' ) {
            return false;
        }else if(s=='' && p!='') {
            if(p.length% 2!= 0) {
                return false;
            }else {
                for(let i=1;i<p.length;p+=2) {
                    if(p[i] != '*') {
                        return false;
                    }
                }
            }
        }else {
            if(s.length>p && !p.indexOf('*')) {
                return false;
            }else {
                const sA = s.split('');
                const pA = p.split('');
                const sALen = sA.length;
                const pALen = pA.length;
                let sAIndex = 0;
                for (let index=0; index<pALen; index++) {
                    
                    if(pA[index] ==='.' || pA[index] === s[sAIndex]) {
                        sAIndex++;
                    }else if(pA[index] === "*") {
                        //因为？*表示可以没有，所以遇到*可以回溯一个index   并且判断p是否到头了
                        // if(index < pALen-1 && pA[index-1] == sA[sAIndex-1]) {
                        if(pA[index-1] == sA[sAIndex-1] || pA[index-1]=='.') {
                            let value = sA[index-1];
                            sAIndex--;
                            let temp = 0;
                            // const fir = p[index-1],mid = pA[index], las = p[index+1];
                            let slicedS = sA.splice(sAIndex,sALen);
                            // if(las != mid ) {
                            //     const addIndex = slicedS.indexOf(las);
                            // }else {
    
                            // }
    
                            // *之后和*之前相等的所有连贯的元素组合成一个数组
                            let slicedP = pA.splice(index+1,pALen);
                            let indexV;
                            for (value of slicedP) {
                                if(value == value) {
                                    // *之后有多少个和*之前一样的字符
                                    temp++;
                                }else {
                                    indexV = value;
                                }
                            };
                            //和*之前不同的元素在s字符串的index
                            // const addIndex = slicedS.indexOf(sA[temp.length+1+index]);
                            // // sAIndex -- addIndex
                            // if(addIndex == -1) {
                            //     return false;
                            // }else {
    
                            // }
                            const indexAim = slicedS.indexOf(indexV);
                            if(indexAim >= temp+1) {
                                index += temp+1;
                                sAIndex += indexAim+1;
                            //若没有重复的东西
                            }else{
                                sAIndex+=2;
                            }
                        //若是*之前的不匹配，这s不往后走
                        }else {
                            //若是p结束了，跳出循环，判断s是否结束了
                            // return false;
                            sAIndex--;
                        }
                        //对于一个*的判断结束
                    }else {
                        //正常的单个字符比较
                        if(sA[sAIndex] == pA[index]) {
                            sAIndex++;
                        }else if(sA[sAIndex] != pA[index] && pA[index+1] == "*") {
                            sAIndex++;
                        }else {
                            return false;
                        }
                    }
                       
                }
                //判断p到头了后s是否到头了
                if(sAIndex == sALen) {
                    return true;
                } else{
                    return false;
                }
            }
        }
    };
    console.log(isMatch('abb','c*a*b*'))