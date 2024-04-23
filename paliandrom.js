let str="MALAYALAM"
function paliandrom(str){
    if(str.length==0){
        return true
    }
    if(str[0]!==str[str.length-1]){
        return false
    }
    console.log(str.slice(1,str.length-1))
    return paliandrom(str.slice(1,str.length-1))
}
console.log(paliandrom(str))
