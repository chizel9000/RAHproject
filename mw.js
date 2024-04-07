window.addEventListener("load", (event) => { scale(); });
window.addEventListener("resize", (event) => { scale(); });
function scale(){
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
var bod = document.body;
bod.style.height = viewHEIGHT;
bod.style.width = viewWIDTH;

//var vid = document.getElementById("bgxc");
//vid.style.height = viewHEIGHT+"px";
//vid.style.width = viewWIDTH+"px";
    
var crew = document.getElementById("crew");
crew.style.height = viewHEIGHT+"px";

var foot = document.getElementById("foot");
foot.style.height = viewHEIGHT*0.5+"px";

var info = document.getElementById("info");
info.style.height = viewHEIGHT*0.1+"px";

console.log("h ",viewHEIGHT,"w ",viewWIDTH);
}

function navigate(){
    var nav = document.getElementById("navbar");
    if(nav.style.display != "block")
    nav.style.display = "block";
    else
        nav.style.display = "none";
}