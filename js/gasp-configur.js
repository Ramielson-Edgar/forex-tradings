document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });
  gsap.registerPlugin(ScrollTrigger);

  // gsap.config({
  //   nullTargetWarn: false,
  //   trialWarn: false,
  // });

  tl.to(".image-1-2", {
    scrollTrigger: {
      trigger: ".image-1-2",
      start: "10px center",
      end: "10px center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-1-2",
    start: "10px center",
    end: "200px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        document.querySelector(".image-1-2").classList.add("is-hidden");
        document.querySelector(".image-1-2").classList.remove("is-active");
      } else {
        document.querySelector(".image-1-2").classList.remove("is-hidden");
        document.querySelector(".image-1-2").classList.add("is-active");
      }
    },
  });

  tl.to(".image-1-1", {
    scrollTrigger: {
      trigger: ".image-1-1",
      start: "200px center",
      end: "200px center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-1-1",
    start: "200px center",
    end: "380px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        document.querySelector(".image-1-1").classList.add("is-hidden");
        document.querySelector(".image-1-1").classList.remove("is-active");
      } else {
        document.querySelector(".image-1-1").classList.remove("is-hidden");
        document.querySelector(".image-1-1").classList.add("is-active");
      }
    },
  });

  tl.to(".image-1-3", {
    scrollTrigger: {
      trigger: ".image-1-3",
      start: "380px center",
      end: "380px center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-1-3",
    start: "380px center",
    end: "1000px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        console.log("hidden", self.isActive);
        document.querySelector(".image-1-3").classList.add("is-hidden");
        document.querySelector(".image-1-3").classList.remove("is-active");
      } else {
        console.log("show", self.isActive);
        document.querySelector(".image-1-3").classList.add("is-active");
      }
    },
  });

  //   ========== Mobile==================

  tl.to(".image-500-1-2", {
    scrollTrigger: {
      trigger: ".image-1-2",
      start: "top center",
      end: "top center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-500-1-2",
    start: "50px center",
    end: "200px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        document.querySelector(".image-500-1-2").classList.add("is-hidden");
        document.querySelector(".image-500-1-2").classList.remove("is-active");
      } else {
        document.querySelector(".image-500-1-2").classList.remove("is-hidden");
        document.querySelector(".image-500-1-2").classList.add("is-active");
      }
    },
  });


  tl.to(".image-500-1-1", {
    scrollTrigger: {
      trigger: ".image-500-1-1",
      start: "top center",
      end: "top center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-500-1-1",
    start: "200px center",
    end: "350px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        document.querySelector(".image-500-1-1").classList.add("is-hidden");
        document.querySelector(".image-500-1-1").classList.remove("is-active");
      } else {
        document.querySelector(".image-500-1-1").classList.remove("is-hidden");
        document.querySelector(".image-500-1-1").classList.add("is-active");
      }
    },
  });


  tl.to(".image-500-1-3", {
    scrollTrigger: {
      trigger: ".image-1-3",
      start: "top center",
      end: "top center",
    },

    opacity: 1,
  });

  ScrollTrigger.create({
    trigger: ".image-500-1-3",
    start: "350px center",
    end: "1000px center",
    onToggle: (self) => {
      if (self.isActive === false) {
        document.querySelector(".image-500-1-3").classList.add("is-hidden");
        document.querySelector(".image-500-1-3").classList.remove("is-active");
      } else {
        document.querySelector(".image-500-1-3").classList.remove("is-hidden");
        document.querySelector(".image-500-1-3").classList.add("is-active");
      }
    },
  });

  tl.to(".image-500-1-1", {
    scrollTrigger: {
      trigger: ".image-500-1-1",
      start: "top center",
      end: "top center",
    },

    opacity: 1,
  });


  gsap.to(".forex-trading-advantages__item", {
    scrollTrigger: {
      trigger: ".forex-trading-advantages__item",
      start: "-300px center",
      end: "top center",
 
    },

    y:0,
    opacity:1,
    stagger:0.1,
    duration:.7,
  });


  gsap.to(".forex-trading-hero__title", {
    scrollTrigger: {
      trigger: ".forex-trading-hero__title",
      start: "top center",
    },

    y:0,
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration:.6,
    
  });

  gsap.to(".forex-trading-feedback__header ", {
    scrollTrigger: {
      trigger: ".forex-trading-feedback__header ",
      start: "-300px center",
    },

    y:0,
    
    duration:.6,
    
  });

  gsap.to(".forex-trading-banner__header", {
    scrollTrigger: {
      trigger: ".forex-trading-banner__header",
      start: "-300px center",
    },

    y:0,
    duration:.6,
    
  });
 
  gsap.to(".fore-trading-banner-img", {
    scrollTrigger: {
      trigger: ".fore-trading-banner-img",
      start: "-350px center",
    },

    y:0,
    duration:.6,
    
  });
 

  
  gsap.to(".forex-trading-tools__item", {
    scrollTrigger: {
      trigger: ".forex-trading-tools__item",
      start: "-300px center",
    },

    y:0,
    duration:.6,
    stagger:0.1,
    
  });


  gsap.to(".forex-trading-award-title", {
    scrollTrigger: {
      trigger: ".forex-trading-award-title",
      start: "-340px center",
    },

    y:0,
    
    
  });
 

 

 
});
