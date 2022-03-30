function fullPerm(list, k, m){
    if(k==m){
     console.log(list);
    }else{
     for(var i=k;i<=m;i++){
      //swap k and i
      var t = list[k];
      list[k] = list[i];
      list[i] = t;
      //recursion
      fullPerm(list,k+1,m);
      list[i] = list[k];
      list[k] = t;
     }
    }
   }
   
   var list = [1,2,3,4];
   fullPerm(list, 0, 3);