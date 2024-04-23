const str="MALAYALAM"
 function paliandrom(str){
    let leftIndex=0;
    let rightIndex=str.length-1
    if(str[leftIndex]!=str[rightIndex]){
return false
    }
    if(str.length==0){
        return true;
    }else{
        console.log(str.slice(1,str.length-1))
       return paliandrom(str.slice(1,str.length-1))
    }
    
 }
 console.log(paliandrom(str))