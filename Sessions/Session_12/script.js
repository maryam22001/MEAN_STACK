var progress=document.getElementById("progress");
var span=document.querySelector("span");

var counter=0;

setInterval(function(){
    progress.value=counter++;
    span.innerHTML=counter+"%";
    if(counter==100){
        clearInterval();
    }
},100);

