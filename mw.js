window.addEventListener("load", (event) => { scale(); });
window.addEventListener("resize", (event) => { scale(); });



function scale(){
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
//var bod = document.body;
//bod.style.height = viewHEIGHT;
//bod.style.width = viewWIDTH;
if(viewWIDTH < 500){
var top = document.getElementById("tc");
    if(top)
top.style.height = viewHEIGHT+"px";    
var logo = document.getElementById("logo");
    if(logo)
logo.style.height = viewHEIGHT*0.25+"px";
    
var welcome = document.getElementById("welcome");
    if(welcome){
welcome.style.height = viewHEIGHT*0.5+"px";
var concern = document.getElementById("concern");
    if(concern)
concern.style.height = viewHEIGHT+"px";
var offer = document.getElementById("offer");
    if(offer)
offer.style.height = viewHEIGHT+"px";
var action = document.getElementById("action");
    if(action)
action.style.height = viewHEIGHT+"px";
    }
}
else{
    var top = document.getElementById("tc");
    if(top)
        top.style.height = viewHEIGHT+"px"; 
    var logo = document.getElementById("logo");
    if(logo)
       { logo.style.height = viewHEIGHT*0.5+"px";
        logo.style.width = viewWIDTH*0.75+"px";
       logo.style.left = viewWIDTH*0.12+"px";
       }
    var welcome = document.getElementById("welcome");
    if(welcome)
       welcome.style.height = viewHEIGHT*0.5+"px";
}

var foot = document.getElementById("foot");
foot.style.height = viewHEIGHT*0.5+"px";

var info = document.getElementById("info");
info.style.height = viewHEIGHT*0.1+"px";

console.log("h ",viewHEIGHT,"w ",viewWIDTH);
    /*
for(var i=0; i < list.length; i++){
    
    list[i].style.left = (i)*100+"px"; 
    
    if(i==last || i==next){
            list[i].classList.add("nextSlide");
    }
    if(i>1 && i<7){
        //list[i].style.opacity = 1;
        if(i==current)
        list[i].classList.add("activeSlide");
        
        }
        //else {
        //list[i].style.opacity = 0.25;
        //}
}
    */

//var vid = document.getElementById("bgxc");
//vid.style.height = viewHEIGHT+"px";
//vid.style.width = viewWIDTH+"px";

    

}

function navigate(){
    var nav = document.getElementById("navbar");
    if(nav.style.opacity != 1)
    {nav.style.opacity = 1; nav.style.left = 0;}
    else
        {nav.style.opacity = 0; nav.style.left = -100+"px";}
}