gsap.registerPlugin()

document.addEventListener('DOMContentLoaded', function() {
  
  const elements = document.querySelectorAll(".fade-up");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2, 
    rootMargin: "0px" 
  });
  
  elements.forEach(el => {
    observer.observe(el);
  });
  
});