/*const str = "hello world";
let str1 = '';
let reversed=str.split('').reverse().join(''); 
//Split ' ': to divide them to 2 words 
//Split'': consider the space a letter 
console.log(reversed);
*/
let num=[];
let sum=0;
let mul=1;
let div;



for(let i=0;i<5 ;i++){
   num.push(parseInt(prompt`enter number ${i+1}`))

}
console.log(num);
for(let i=0;i<5;i++){
sum+=num[i];
mul*=num[i];
if(i==0){
    div=num[i];
}else
div/=num[i];

}
console.log(sum);
console.log(mul);
console.log(div);