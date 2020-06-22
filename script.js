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



for(let i = 1; i<=4; i++){

}

let i = 1
const canIRun = true
function changeImg(){

    const sliderContainer = document.querySelector(".slide");


    if (sliderContainer.dataset.hover === "false"){
        const sliderimage = document.querySelector(".slider-main-image");
        console.log(sliderimage.getAttribute("src"))

        if (sliderimage.getAttribute("src") === `styles/images/${i}.jpg`){           

            if (i < 4){
                i++;
            }else{
                i=1;
            }
        }

        sliderimage.src = `styles/images/${i}.jpg`

        setTimeout(`changeImg()`, 2000);
    }
}

let start = new Date()
let end = new Date()



const sliderContainer = document.querySelector(".slide");
sliderContainer.addEventListener("mouseenter", function(event){
    sliderContainer.dataset.hover = "true"
    start = new Date();
    
})
sliderContainer.addEventListener("mouseleave", function(event){
    sliderContainer.dataset.hover = "false"
    end = new Date();
    if (end-start > 2000){        
        setTimeout("changeImg()", 2000);
    }


})

changeImg()

const rightButton = document.querySelector(".right-section")
rightButton.addEventListener("click", function(){
    const sliderimage = document.querySelector(".slider-main-image");
    if (i < 4){
        i++;
    }else{
        i=1;
    }
    sliderimage.src = `styles/images/${i}.jpg`

})
const leftButton = document.querySelector(".left-section")
leftButton.addEventListener("click", function(){
    const sliderimage = document.querySelector(".slider-main-image");
    if (i > 1){
        i--;
    }else{
        i=4;
    }
    sliderimage.src = `styles/images/${i}.jpg`

})
