function readMore() { 
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";  
      
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";    
    }
  } 

     
  gsap.to(".home .home-content h1", {  
    transform: "translateX(-150%)",
    scrollTrigger: {  
        trigger: ".home-content",
        scroll: "body",
        scrub: true,
        pin: true
    }
})
gsap.to(".home-image", {
    y:100,   
    ease: "power4.inOut", 
    repeat: -1, 
    duration:2,   
    delay:.5,    
    yoyo:true     
    
});  
 
gsap.to(".about .about-img img", {  
    transform: "translateX(-150%)",  
    scrollTrigger: {  
        trigger: ".about-content",    
        scroll: "body",
        scrub: true,
        pin: true
    }
})




