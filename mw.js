window.addEventListener("load", (event) => { scale(); });
//window.addEventListener("resize", (event) => { scale(); });

var myDiv = document.getElementById("crew");
if(myDiv)
var clist = myDiv.querySelectorAll(".card > .fcard");
//console.log(myDiv);
//console.log(clist);

if(myDiv)
var clist2 = myDiv.querySelectorAll(".card > .fcard > .hwcard");
//console.log(clist2);

var myDiv2 = document.getElementById("rep");
if(myDiv2)
var tlist = myDiv2.querySelectorAll(".fcard");

function scale(){
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
    
        var top = document.getElementById("top");
    if(top)
top.style.height = viewHEIGHT+"px"; 
    
    
    if(clist)
    clist.forEach((item) => {
     if(viewWIDTH < 500){
         item.classList.add("card");
        item.classList.remove("fcard");
        }
    else{
        item.classList.add("fcard");
        item.classList.remove("card");
        }
}); 
     if(clist2)
    clist2.forEach((item) => {
     if(viewWIDTH < 500){
         item.classList.add("card");
        item.classList.remove("hwcard");
        }
    else{
        item.classList.add("hwcard");
        item.classList.remove("card");
        }
}); 
    
    if(tlist)
    tlist.forEach((item) => {
     if(viewWIDTH < 500){
         item.classList.add("card");
        item.classList.remove("fcard");
        }
    else{
        item.classList.add("fcard");
        item.classList.remove("card");
        }
}); 

    
    if(viewWIDTH < 500){
        var mc = document.getElementById("mescen");
        if(mc){
        mc.classList.remove("hwcard");
        mc.classList.add("card");
        }
        var bb = document.getElementById("billboard");
        if(bb){
        bb.classList.remove("hwcard");
        bb.classList.add("card");
        }
        var mc = document.getElementById("mission");
        if(mc){
        mc.classList.remove("hwcard");
        mc.classList.add("card");
        }
        var bb = document.getElementById("vision");
        if(bb){
        bb.classList.remove("hwcard");
        bb.classList.add("card");
        }
        var mc = document.getElementById("p1");
        if(mc){
        mc.classList.remove("hwcard");
        mc.classList.add("card");
        }
        var bb = document.getElementById("p2");
        if(bb){
        bb.classList.remove("hwcard");
        bb.classList.add("card");
        }
    }
    else{
        var mc = document.getElementById("mescen");
        if(mc){
        mc.classList.remove("card");
        mc.classList.add("hwcard");
        }
        var bb = document.getElementById("billboard");
        if(bb){
        bb.classList.remove("card");
        bb.classList.add("hwcard");
        }
        var mc = document.getElementById("mission");
        if(mc){
        mc.classList.remove("card");
        mc.classList.add("hwcard");
        }
        var bb = document.getElementById("vision");
        if(bb){
        bb.classList.remove("card");
        bb.classList.add("hwcard");
        }
        //p1 n p2
        var mc = document.getElementById("p1");
        if(mc){
        mc.classList.remove("card");
        mc.classList.add("hwcard");
        }
        var bb = document.getElementById("p2");
        if(bb){
        bb.classList.remove("card");
        bb.classList.add("hwcard");
        }
    }
    
    
//var bod = document.body;
//bod.style.height = viewHEIGHT;
//bod.style.width = viewWIDTH;

  
/*
if(viewWIDTH < 500){
   
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
*/
//var crew = document.getElementById("crew");
//crew.style.height = viewHEIGHT*1.25+"px";
    
if(viewWIDTH < 500){
   
var logo = document.getElementById("special");
    if(logo)
logo.style.height = viewHEIGHT*0.5+"px";
    
var welcome = document.getElementById("merch");
    if(welcome)
welcome.style.height = viewHEIGHT*0.5+"px";
var concern = document.getElementById("mimic");
    if(concern)
concern.style.height = viewHEIGHT*0.5+"px";
    var foot = document.getElementById("foot");
    if(foot)
foot.style.height = viewHEIGHT*0.5+"px";
}
else{
    
    var logo = document.getElementById("special");
    if(logo)
        logo.style.height = viewHEIGHT+"px";

        var welcome = document.getElementById("merch");
            if(welcome)
        welcome.style.height = viewHEIGHT+"px";
        var concern = document.getElementById("mimic");
            if(concern)
        concern.style.height = viewHEIGHT+"px";
    
    var foot = document.getElementById("foot");
    if(foot)
foot.style.height = viewHEIGHT*0.75+"px";
}
    
//var crew = document.getElementById("crew");
  //  if(crew)
//crew.style.height = viewHEIGHT+"px";

var info = document.getElementById("info");
    if(info)
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
var nav = document.getElementById("navbar");
if(nav)
    nav.style.opacity = 1;
function navigate(){
    //var nav = document.getElementById("navbar");
    //nav.style.opacity == 1
    //else
    if(nav.style.opacity == 1)
        {nav.style.opacity = 0; nav.style.left = -100+"px";}
    else
    {nav.style.opacity = 1; nav.style.left = 0;}
}