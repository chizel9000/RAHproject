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
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
var current = 2;
var last = 1;
var next = 3;
//var scrollcounter = 0;
const element = document.getElementById("scroll");
var namep = document.getElementById("nu");
var info = document.getElementById("deta");
var list = document.querySelectorAll(".slide");
    console.log(list);
//var viewHeight = innerHeight;
//var viewWidth = innerWidth;
//element.onclick = (event) => 
function scrollClick(director){
    //scrollcounter++;
    //console.log(scrollcounter);
    
    if(director == -1)
    if(last == -1){
        current = list.length -1;
        next = list.length;
        last = list.length -2;
    }
    else 
        {
        if(next > -list.length)
    {
        current += director;
        last += director;
        next += director;
    }        
        }
    if(director == 1)
    if(next < list.length)
    {
        current += director;
        last += director;
        next += director;
    }
    else
        {current = 0; last=-1; next=1;}
    //namep.innerHTML = deta[current].name;
    //info.innerHTML = deta[current].desc;
    
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

function scrollClickA(){
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
    //namep.innerHTML = deta[current].name;
    //info.innerHTML = deta[current].desc;
    
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
   // namep.innerHTML = deta[current].name;
   // info.innerHTML = deta[current].desc;
/*
list.forEach(item => {
   item.style.left = list.indexOf(item)*10+"px"; 
});  */
const options = {
    threshold:1,
    rootMargin: "0px 0px -100px 0px"
};
var anim = document.getElementById("anim3");
if(anim)
anim.style.height = viewHEIGHT*0.75+"px";  
anim = document.getElementById("anim1");
if(anim)
{
anim.style.height = viewHEIGHT*0.75+"px";
anim.style.width = viewWIDTH+"px";
//anim.style.left = viewWIDTH*0.5+"px";
}
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
if(anim)
appearOnScroll.observe(anim);
    
//var crew = document.getElementById("crew");
//crew.style.height = viewHEIGHT+"px";

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
const dir =1;
let intvalID;
intvalID = setInterval(scrollClickA,5000);
const al = "artist-al.html";
const damian = "artist-damian.html";
const isuru = "artist-isuru.html";
const natiavelli = "artist-natiavelli.html";
const victor = "artist-victor.html";
const wendy = "artist-wendy.html";
const yorden = "artist-yorden.html";
function moveto(name){
    window.location.href = name;
}