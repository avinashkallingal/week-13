
const arr=[0,1,2,3]
let i=0;
while(i<=arr.length-1){
     setTimeout(()=>console.log(arr[i]),i*1000)
    i=i+1   
    
}