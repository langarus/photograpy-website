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
        back.style.opacity = "1"
        console.log("works")
    }else{
        navBar.style.position = "static"
        back.style.opacity = "0"
        }
}

let observer = new IntersectionObserver(callBack, options)

observer.observe(galleries)

for(let i = 1; i <= 9; i++){
    const mainContainer = document.querySelector(".grid-container")
const blogDiv = document.createElement("div")
blogDiv.classList = "blog-posts"
blogDiv.innerHTML = `<a href="#">
<div class="overlay">
    <div class="text">
        <p class="date">31/01/2020</p>
        <p class = "name">Family Name</p>
        <p class="open">Open Post</p>
    </div>
    <div class="full-background"></div>
</div>   
    <img class = "gallery1" src="styles/thumbnails/${i}.jpg" alt="">                    
</a>`
mainContainer.appendChild(blogDiv)
}
