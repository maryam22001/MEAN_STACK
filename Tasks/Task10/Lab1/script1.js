function MinMax(...nums) {
   
    const min = Math.min(...nums); 
    const max = Math.max(...nums); 

    return { min, max }; 
}
const res = MinMax(10, 2, 33, 7, 1);
console.log(res); 
