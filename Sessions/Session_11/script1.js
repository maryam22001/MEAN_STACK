console.log(window)

setTimeout(()=>{
    open("index1.html",null,"width=50px,height=50px")

},3000)
document.querySelector("button").addEventListener("click",function(){
    window.close()
})
window.addEventListener("keydown",function(e){
    console.log(e)
if(e.key=="q"&&e.ctrlKey){
    console.log("done")
}
})
