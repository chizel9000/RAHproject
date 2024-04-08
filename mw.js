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
const options = {
    threshold:1,
    rootMargin: "0px 0px -100px 0px"
};
    
var anim = document.getElementById("anim3");
anim.style.height = viewHEIGHT*0.5+"px";   
anim = document.getElementById("anim1");
anim.style.height = viewHEIGHT*0.5+"px";
anim.style.width = viewWIDTH+"px";
//anim.style.left = viewWIDTH*0.5+"px";
anim = document.getElementById("anim2");
const appearOnScroll = new IntersectionObserver
(function(entries,appearOnScroll){
    
    //console.log(e);
    entries.forEach(entry => {
       if(!entry.isIntersecting)return;
    else {
        entry.target.classList.add("anim-rightin");
        appearOnScroll.unobserve(entry.target);
    } 
    },options);
    
});

appearOnScroll.observe(anim);
    
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