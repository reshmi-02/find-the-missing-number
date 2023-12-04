
let arr=[0,1,2,4,5,7,8,10,13]
document.write("given array = [0,1,2,4,5,7,8,10,13] <br><br>")
let num=0;

for(let i=0;i<arr.length;i++){
    console.log("arr"+arr[i]);
    console.log("i"+i);
    console.log("num"+num);
    if(arr[i]!==num){
        document.write(`missing number ${num} <br><br>`)
        i=i-1
    }
    else{
        document.write(num+"<br><br>")
    }
    num=num+1
}
