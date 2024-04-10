window.addEventListener("load", (event) => { scale(); });
window.addEventListener("resize", (event) => { scale(); });

const deta = [
    {name:"Epoch Melchior", desc:"Time machine lorem dolor sit amet lorem dolor sit amet."},
    {name:"Lucca Toma", desc:"Genius inventor lorem dolor sit amet lorem dolor sit amet."},
    {name:"Crono Player", desc:"Stalwort swordsman lorem dolor sit amet lorem dolor sit amet."},
    {name:"Marle Nadia", desc:"Rambunctious princess lorem dolor sit amet lorem dolor sit amet."},
    {name:"Frog Glenn", desc:"Frog warrior lorem dolor sit amet lorem dolor sit amet."},
    {name:"Chief Ayla", desc:"Cave babe lorem dolor sit amet lorem dolor sit amet."},
    {name:"Magus Janus", desc:"Magic master lorem dolor sit amet lorem dolor sit amet."},
    {name:"Robo Proto", desc:"Future machine lorem dolor sit amet lorem dolor sit amet."},
    {name:"Crono Player", desc:"Stalwort swordsman lorem dolor sit amet lorem dolor sit amet."},
    {name:"Marle Nadia", desc:"Rambunctious princess lorem dolor sit amet lorem dolor sit amet."}
    
];
var current = 2;
var last = 1;
var next = 3;
//var scrollcounter = 0;
const element = document.getElementById("scroll");
var namep = document.getElementById("nu");
var info = document.getElementById("deta");
var list = document.querySelectorAll(".slide");
    console.log(list);

element.onclick = (event) => {
    //scrollcounter++;
    //console.log(scrollcounter);
    
    
    if(next < list.length)
    {
        current ++;
        last ++;
        next ++;
    }
    else
        {current = 0; last=-1; next=1;}
    namep.innerHTML = deta[current].name;
    info.innerHTML = deta[current].desc;
    
list.forEach((item, index) => {
   if(index < current)
    item.style.left = -20+"%"; 
    else if (index > current) 
        item.style.left = 80+"%"; 
    else item.style.left = 20+"%"; 
        
    if(index == current) item.classList.add("activeSlide");
    else item.classList.remove("activeSlide");
    if(index == last || index == next) item.classList.add("nextSlide");
    else item.classList.remove("nextSlide");
}); 
    
}
    namep.innerHTML = deta[current].name;
    info.innerHTML = deta[current].desc;
/*
list.forEach(item => {
   item.style.left = list.indexOf(item)*10+"px"; 
});  */

function scale(){
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
var bod = document.body;
bod.style.height = viewHEIGHT;
bod.style.width = viewWIDTH;


    
list.forEach((item, index) => {
   if(index < current)
    item.style.left = -20+"%"; 
    else if (index > current) 
        item.style.left = 80+"%"; 
    else item.style.left = 20+"%"; 
        
    if(index == current) item.classList.add("activeSlide");
    else item.classList.remove("activeSlide");
    if(index == last || index == next) item.classList.add("nextSlide");
    else item.classList.remove("nextSlide");
}); 
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
var top = document.getElementById("tc");
top.style.height = viewHEIGHT*0.25+"px";    
var logo = document.getElementById("logo");
logo.style.height = viewHEIGHT*0.25+"px";
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
    if(nav.style.opacity != 1)
    {nav.style.opacity = 1; nav.style.left = 0;}
    else
        {nav.style.opacity = 0; nav.style.left = -100+"px";}
}