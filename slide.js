
const viewWIDTH = Math.floor(innerWidth);
const viewHEIGHT = Math.floor(innerHeight);
var current = 2;
var last = 1;
var next = 3;
//var scrollcounter = 0;
const element = document.getElementById("scroll2");
var namep = document.getElementById("nu");
var info = document.getElementById("deta");
var list = document.querySelectorAll(".slide2");
    console.log(list);
//var viewHeight = innerHeight;
//var viewWidth = innerWidth;
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
    //namep.innerHTML = deta[current].name;
    //info.innerHTML = deta[current].desc;
    
list.forEach((item, index) => {
   if(index < current)
    item.style.left = -100+"%"; 
    else if (index > current) 
        item.style.left = 100+"%"; 
    else item.style.left = 0+"%"; 
        
    if(index == current) item.classList.add("activeSlide2");
    else item.classList.remove("activeSlide2");
    if(index == last || index == next) item.classList.add("nextSlide2");
    else item.classList.remove("nextSlide2");
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
    


list.forEach((item, index) => {
   if(index < current)
    item.style.left = -100+"%"; 
    else if (index > current) 
        item.style.left = 100+"%"; 
    else item.style.left = 0+"%"; 
        
    if(index == current) item.classList.add("activeSlide2");
    else item.classList.remove("activeSlide2");
    if(index == last || index == next) item.classList.add("nextSlide2");
    else item.classList.remove("nextSlide2");
}); 
let intvalID;
intvalID = setInterval(element.onclick,9000);

