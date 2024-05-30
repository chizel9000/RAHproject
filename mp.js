//window.addEventListener("load", (event) => { play(); });

var mov = document.querySelector("video");//("fgx");
var mc = document.getElementById("introscene");
/*function play(){
    
    if(mov)
        if(mov.ended)
            mc.style.display = "none";
    
}
*/


//mov.onended = (event) => {mc.style.display = "none";  mov.style.display = "none";};

function rex(){
    
    mc.style.display = "none";
     mov.style.display = "none";
  //  console.log("beep");
    
}

mov.addEventListener("ended", (event) => {rex();});