document.querySelector(".navbar-links-toggle").addEventListener("click", () => {
    document.querySelector(".navbar-link-group").classList.toggle("show")
})

document.querySelectorAll(".navbar-link").forEach((l)=>{
    l.addEventListener("click",()=>{
        var classes=document.querySelector(".navbar-link-group").classList

        if(classes.contains("show")){
            document.querySelector(".navbar-link-group").classList.remove("show")
        }
    })
})

var animateElements = [
    ".grid.about>.content",
    ".grid.contact>.content",
    ".img-anim"
]

var scrollObserver = new IntersectionObserver(e => {
    e.forEach((item) => {
        item.target.classList.toggle("show", item.isIntersecting);

    })
}, { threshold: 0.15 })

    animateElements.forEach((e) => {
        document.querySelectorAll(e).forEach((el)=>{
            scrollObserver.observe(el)
        })
    })