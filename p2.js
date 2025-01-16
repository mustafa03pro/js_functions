const prompt=require('prompt-sync')();
let n=prompt("enter the number")

n=Number.parseInt(n)
let i=0;
while(i<n){
    console.log(i)
    i++;
}