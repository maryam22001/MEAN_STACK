const progressBar = document.getElementById("progress")
const span = document.querySelector("span");

/**function updateProgressBar() {
    var duration = 3000; 
    var starttime =new Date().getTime();
    var interval = setInterval(function() {
        var currentTime = new Date().getTime();
        var diff = Math.round(((currentTime - starttime) / duration) * 100);
        if( diff<=100){
            progressBar.value=diff;
            span.innerHTML = diff + "%";
        }else{  
             progressBar.value = 100;
            span.innerHTML = "100%";
            
        }
    }, 100);
}updateProgressBar();**/

var counter=0;

setInterval(function(){
    if(counter<100){
    progress.value=counter++;
    span.innerHTML=counter+"%";
    }else{
        counter=0;
         
    
    }
   
},100);