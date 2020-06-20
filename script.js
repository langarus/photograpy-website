const galleries = document.querySelector(".galleries")

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }  
  
function callBack(entries){
    const navBar = document.querySelector("nav")
    const back = document.querySelector(".hidden-nav")

    if(entries[0].isIntersecting){
        
        navBar.style.position = "sticky"
        back.style.display = "block"
        console.log("works")
    }else{
        navBar.style.position = "static"
        back.style.display = "none"
        }
}

let observer = new IntersectionObserver(callBack, options)

observer.observe(galleries)