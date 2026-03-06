gsap.registerPlugin()

const elements = document.querySelectorAll(".fade-up")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

gsap.to(entry.target,{
opacity:1,
y:0,
duration:1,
ease:"power3.out"
})

}

})

})

elements.forEach(el=>{
observer.observe(el)
})