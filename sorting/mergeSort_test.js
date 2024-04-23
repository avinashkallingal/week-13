function mergeSort(arr){
   if(arr.length<2){
    return arr
   }
    let mid=Math.floor((0+arr.length-1)/2)
    let left=arr.slice(0,mid);
    let right=arr.slice(mid)
    return sort(mergeSort(left),mergeSort(right))
}
function sort(left,right){
    let sortArray=[];
    while(left.length&&right.length){
        if(left[0]>right[0]){
            sortArray.push(left.shift())
        }else{
            sortArray.push(right.shift())
        }
    }
    return [...sortArray,...left,...right]

}
const arr=[2,8,1,3,5]
console.log(mergeSort(arr))