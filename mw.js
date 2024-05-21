window.addEventListener("load", (event) => { scale(); });

var checkW = Math.floor(innerWidth);
if(checkW > 500)
window.addEventListener("resize", (event) => { scale(); });

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
    
  //      var top = document.getElementById("top");
  //  if(top)
//{top.style.height = viewHEIGHT+"px"; top.style.width = viewWIDTH+"px"; }
    
    var crew = document.getElementById("hs");
    if(crew)
        crew.style.height = viewHEIGHT+"px";
    var crew = document.getElementById("fs");
    if(crew)
        if(viewWIDTH < 500)
        crew.style.height = viewHEIGHT*0.5+"px";
        else
        crew.style.height = viewHEIGHT+"px";
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
   var artist = document.getElementById("artist");
    if(artist)
        {artist.classList.remove("hwcard");
        artist.classList.add("card");}
var logo = document.getElementById("special");
    if(logo)
logo.style.height = viewHEIGHT*0.5+"px";
    
//var welcome = document.getElementById("merch");
  //  if(welcome)
//welcome.style.height = viewHEIGHT*0.5+"px";
var concern = document.getElementById("mimic");
    if(concern)
concern.style.height = viewHEIGHT*0.5+"px";
    var foot = document.getElementById("foot");
    if(foot)
foot.style.height = viewHEIGHT*0.5+"px";
}
else{
    var artist = document.getElementById("artist");
    if(artist)
        {artist.classList.remove("card");
        artist.classList.add("hwcard");}
    var logo = document.getElementById("special");
    if(logo)
        logo.style.height = viewHEIGHT+"px";

       // var welcome = document.getElementById("merch");
        //    if(welcome)
       // welcome.style.height = viewHEIGHT+"px";
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
var slicetrack = 0;
var count = 6;    
//var lengthcheck = 6;
var slices = document.querySelectorAll("#backdrop > .bdslice > img");
    console.log(slices);
    var gallery = document.querySelectorAll("#hg > img");
    console.log(gallery);

function rippleCopy(){
    
   // for(var i = 0; i < slices.length; i++){
        if(slicetrack == slices.length)slicetrack=0;
        if(count == gallery.length)count=0;
       // console.log(count);
            let seed = gallery[count].src;
       // console.log(seed);
            slices[slicetrack].src = seed;
        
        count++; slicetrack++;
        
  //  }
    
    
}

function listCopy(){
   // var gt = [];
    
    //slist.length + glist.length
   // gt = slices;
  //  gt = gallery;
  //  console.log(gt);
    

    slices.forEach((item, index)=>{
        //if(lengthcheck < gallery.length-1){
          //  lengthcheck ++;
        if(count == gallery.length)count=0;
        console.log(count);
            let seed = gallery[count].src;
        console.log(seed);
            item.src = seed;
        
        count++;
       // item.src = index+slices.length + ""
          //  console.log(lengthcheck,gallery.length);
            
       // }
      //  else {lengthcheck = 0;
      //       let seed = gallery[lengthcheck].src;
     //   item.src = seed;
     //        }
     //   
        
            
    });
    
    
   // if(lengthcheck >= gallery.length)
     //   {count= 0; lengthcheck = 0;} //intvalID.clearInterval();
       // else
         //   count++;

   // for(var i = 0; i < gt; i++){
   //     slices.forEach((item)=>{
   //         let seed = gallery[index+i].src;
   //         item.src = seed;
   //     });
   // }


}


function toggleMenu(){
    console.log("rawr");
    var mb = document.getElementById("menubar");
    var navli = document.getElementById("navbar3")
    if(navli)
    var navlist = navli.querySelectorAll("li");
    console.log(navlist);
var nav = document.getElementById("navbar3");
if(nav)    
    if(nav.style.opacity != 1)
       { 
           nav.style.opacity = 1;
            mb.src = "img/exit.png";
           //nav.style.height = "100%";
           nav.style.top = 100+"%";
           navlist.forEach((item)=>{
               item.style.position = "relative";
           });
       }
    else
        {
            mb.src = "img/menubar.png";
            nav.style.opacity = 0;
           // nav.style.height = "0%";
            nav.style.top = -100+"%";
            navlist.forEach((item)=>{
               item.style.position = "absolute";
           });
        }
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


function toggleGallery(){
    console.log("click");
    var gallery = document.getElementById("artgallery");
    if(gallery)
        if(gallery.style.display != "block")
        gallery.style.display = "block";
        else
            gallery.style.display = "none";
}


let intvalID;
intvalID = setInterval(rippleCopy,250);
