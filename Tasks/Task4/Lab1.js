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





