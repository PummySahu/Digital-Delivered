
var text = document.querySelector("#main>#cir>h3")
var clut = ""

text.textContent.split("").forEach(function(c){
    clut += `<span>${c}</span>`
})
text.innerHTML = clut

document.querySelectorAll("#main>#cir>h3>span").forEach(function(value,index){
    value.style.transform = "rotate("+index*17 + "deg)"
})






document.querySelector("#img1").addEventListener("mousemove",function(dets){
    console.log(dets)
    document.querySelector("#cursor1").style.scale = 1
    document.querySelector("#cursor1").style.opacity = 1
    
    
    document.querySelector("#cursor1").style.left = (dets.x-360)+"px"
    document.querySelector("#cursor1").style.top = (dets.y-250)+"px"
})
document.querySelector("#img1").addEventListener("mouseleave",function(dets){
    document.querySelector("#cursor1").style.scale = 0
    document.querySelector("#cursor1").style.opacity = 0
    cursor.style.opacity = 1
})

document.querySelector("#img2").addEventListener("mousemove",function(dets){
    console.log(dets)
    document.querySelector("#cursor2").style.scale = 1
    document.querySelector("#cursor2").style.opacity = 1
    
    
    document.querySelector("#cursor2").style.left = (dets.x-700)+"px"
    document.querySelector("#cursor2").style.top = (dets.y-250)+"px"
})
document.querySelector("#img2").addEventListener("mouseleave",function(dets){
    document.querySelector("#cursor2").style.scale = 0
    document.querySelector("#cursor2").style.opacity = 0
    cursor.style.opacity = 1
})
document.querySelector("#img3").addEventListener("mousemove",function(dets){
    console.log(dets)
    document.querySelector("#cursor3").style.scale = 1
    document.querySelector("#cursor3").style.opacity = 1
    // cursor.style.opacity = 0
    
    
    document.querySelector("#cursor3").style.left = (dets.x-1100)+"px"
    document.querySelector("#cursor3").style.top = (dets.y-250)+"px"
})
document.querySelector("#img3").addEventListener("mouseleave",function(dets){
    document.querySelector("#cursor3").style.scale = 0
    document.querySelector("#cursor3").style.opacity = 0
    cursor.style.opacity = 1
})



var h1 = document.querySelector("#main2>h1")

var clutter = ""

h1.textContent.split("").forEach(ele => {
    clutter += `<span>${ele}</span>` 
});

h1.innerHTML = clutter

gsap.to("#main2>h1>span",{
    scrollTrigger:{
        trigger:"h1 span",
        scroll:"body",
        start:"top 90%",
        end:"top 50%",
        scrub:1

    },
    opacity:1,
    stagger:.2,
    y:0,
    duration:2,
    ease:Expo
})

gsap.from("#ho",{
    scrollTrigger:{
        trigger:"#ho",
        scroll:"body",
        scrub:1,
        start:"top 70%",
        end:"top 60%"

    },
    opacity:0,
    y:"-20px"
})
gsap.from("#hoo",{
    scrollTrigger:{
        trigger:"#hoo",
        scroll:"body",
        scrub:1,
        start:"top 79%",
        end:"top 60%"

    },
    opacity:0,
    y:"-20px"
})


gsap.from("#img1",{
    x:-500,
    opacity:0,
    ease:Expo,
    duration:2, 
})


gsap.to("#img3",{
    scrollTrigger:{
       scrub:1,
       opacity:0,
       trigger:"#img3",
       scroll:"body",
       start:"top 10%"
    },

    x:500,
    opacity:0,
    ease:Expo,
    duration:2
})
gsap.from("#img2",{
    opacity:0,
    ease:Expo,
    duration:2,
    scale:0
})


gsap.from("#box1",{
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#box1",
        scroll:"body",
        start:"top 80%",
        end:"top 40%"
     },
    opacity:0,
    ease:Expo,
    duration:2,
    rotate:"-40deg",
})

gsap.from("#box2",{
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#box3",
        scroll:"body",
        start:"top 80%",
        end:"top 40%"
     },
    opacity:0,
    ease:Expo,
    duration:2,
    y:-100
})
gsap.from("#box3",{
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#box1",
        scroll:"body",
        start:"top 80%",
        end:"top 40%"
     },
    opacity:0,
    ease:Expo,
    duration:2,
    rotate:"40deg",
})

gsap.from("#big",{
    scrollTrigger:{
        scrub:1,
        opacity:0,
        trigger:"#big",
        scroll:"body",
        start:"top 80%",
        end:"top 20%"
     },
    opacity:0,
    ease:Expo,
    duration:2,
    x:500
})

gsap.from("#main>p",{
    scrollTrigger:{
        scrub:1,
        // markers:true,
        trigger:"#main>p",
        scroll:"body",
        start:"top 90%",
        end:"top 20%"
     },
    opacity:0,
    ease:Expo,
    duration:1,
    y:10
})
gsap.from("#main2>#nav2",{
    scrollTrigger:{
        // markers:true,
        trigger:"#main2>#nav2",
        scroll:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:1
        
    },
    y:-20,
    opacity:0
})
