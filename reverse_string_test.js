// let str=["a","b","c","d"]
// let temp;
// function reverse(str){
//     if(str.length<=1){
//         return str
//     }
// temp=str[0]
// str[0]=str[str.length-1]
// str[str.length-1]=temp
// return reverse(str.slice(1,-1))

// }
// const ans=reverse(str);
// console.log(ans)

function reverse(str){
    if(str==""||str==null){
        return str;
    }
    return reverse(str.substring(1))+str[0]
}
console.log(reverse("abcd"))