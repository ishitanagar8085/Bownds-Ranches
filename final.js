function init()

{gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init()


var overlay = document.querySelector("#overlay")
var scroll = document.querySelector("#scroll")
overlay.addEventListener("mouseenter", function () {
    scroll.style.scale = 1
})
overlay.addEventListener("mouseleave", function () {
  scroll.style.scale = 0
})
overlay.addEventListener("mousemove", function (dets) {
    scroll.style.left = `${dets.x - 45}px`
    scroll.style.top = `${dets.y - 38}px`
}) 


gsap.to("#page2 img",{
   
  scrollTrigger:{
    scroller:"#main",
     trigger:"#page2 img",
     mmarkers:true,
     start:"top 80%",
    
     scrub:5,
  },
  rotate: 5,
  duration:2,

})

gsap.to("#page2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
    markers:true,
    start: "top 100%",
    end:"top 93%",
  },
  
  top:0,

})
 



  

gsap.from("#page2 h1",{
 
  onStart:function(){
      $('#page2 h1').textillate({ in: { effect: 'fadeInUpBig' } });
  }
})

gsap.from("#page2 h2",{
  
onStart: function(){
      $('#page2 h2').textillate({ in: { effect: 'fadeInUpBig' } });
  }
})


gsap.from("#page3 h1",{
 
  onStart:function(){
      $('#page3 h1').textillate({ in: { effect: 'fadeInUpBig' } });
  }
})

document.querySelector("#page3").addEventListener("mousemove",function(dets){
  document.querySelector("#page3>img").style.left= dets.x+"px"
  document.querySelector("#page3>img").style.top = dets.y+"px"
  document.querySelector("#page3>button").style.left = (dets.x+0) +"px"
  document.querySelector("#page3>button").style.top = (dets.y+80)+"px"
})



document.querySelector("#page4").addEventListener("mousemove",function(dets){
  document.querySelector("#page4>img").style.left = dets.x+"px"
  document.querySelector("#page4>img").style.top = dets.y+"px"
  document.querySelector("#page4>button").style.left = `${dets.x + 105}px`
  document.querySelector("#page4>button").style.top = `${dets.y + 108}px`

})   
document.querySelectorAll(".elem").forEach(function(e){
  var a = e.getAttribute("data-img")
  e.addEventListener("mousemove",function(){
    document.querySelector("#page4>img").setAttribute("src",a)
  })
})


gsap.to("#page6", {
  scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: true,
     pin:true,
      mmarkers:true,
  }
})

gsap.to("#div1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#div1",
    start:"top 85%",
    end:"top 27%",
    markers:true,
    scrub:3,
 
  },
rotate: 5,
})

gsap.from("#div2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#div2",
    start:"top 80%",
    end:"top 55%",
    markers:true,
    scrub:3,
    
  },
rotate: -12,
y:650
})