

//1-enter format MM-DD-yyy
//function that takes user input as a parameter 
//10char , second and 10th is -
// date checks 
let bd= prompt(" enter date in format MM-DD-YYYY")

function checkDate(bd) {  

for(let i=0;i<bd.length;i++){
    if(bd[2] != "-"&& bd[5] != "-"){
       alert("invalid date format")

    }
    if(bd[0]+bd[1]>31 && bd[3]+bd[4]>12){
       alert("invalid date")
    }
    if(bd.length != 10){
       alert("invalid date")
    }
    else{
       alert(bd)
    }

}


}
checkDate(bd); 