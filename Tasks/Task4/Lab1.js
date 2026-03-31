//lab1
//a function that takes a date string as a parameter and returns date name 
// 1-takes date parameter 
// 2- return day name 
// to string 




function getDayName(dateString, locale = 'en-US') {
 
  const date = new Date(dateString);


  const options = { weekday: 'long' };
  return date.toLocaleDateString(locale, options);
}

console.log(getDayName("10/01/2023"))





=======
//a function that takes a date string as a parameter and returns date name 
// 1-takes date parameter 
// 2- return day name 
// to string 




function getDayName(dateString, locale = 'en-US') {
 
  const date = new Date(dateString);


  const options = { weekday: 'long' };
  return date.toLocaleDateString(locale, options);
}

console.log(getDayName("10/01/2023"))





>>>>>>> 80519641e6da17420de8f87df03279627169d0f7
