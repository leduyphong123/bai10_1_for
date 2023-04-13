let number;
let sum=0;
do{
    number=parseInt(prompt("nhap vao so bat ki:"));
}while(number<=0)
for(let i=1;i<=number;i++){
    sum+=i;
}
document.write(sum);