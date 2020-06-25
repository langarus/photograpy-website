//slider - I create two listeners, one for half of gallery and the other for slider

// when it is at the middle of gallery or when slider not visible - show navbar

const galleries = document.querySelector(".galleries");
const slider = document.querySelector(".slide");
const navBar = document.querySelector("nav");
const back = document.querySelector(".hidden-nav");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

let sliderVisible = 1;

function callBack(entries) {
  if (entries[0].isIntersecting || !sliderVisible) {
    navBar.style.position = "sticky";
    back.style.opacity = "1";
  } else {
    navBar.style.position = "static";
    back.style.opacity = "0";
  }
}

let observer = new IntersectionObserver(callBack, options);
observer.observe(galleries);

//this is listener for slider
function callBack2(entries) {
  if (entries[0].isIntersecting) {
    sliderVisible = 1;
    // console.log(sliderVisible)
  } else {
    sliderVisible = 0;
    // console.log(sliderVisible)
  }
}

let observer2 = new IntersectionObserver(callBack2);
observer2.observe(slider);

// ------------
//The gallery and overlay generator
for (let i = 1; i <= 9; i++) {
  const mainContainer = document.querySelector(".grid-container");
  const blogDiv = document.createElement("div");
  blogDiv.classList = "blog-posts";
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
</a>`;
  mainContainer.appendChild(blogDiv);
}

//------------
// the code for the slider
const sliderContainer = document.querySelector(".slide");
const sliderimage = document.querySelector(".slider-main-image");
const leftButton = document.querySelector(".left-section");
const rightButton = document.querySelector(".right-section");

// checks to see if i'm hovering and at which picture I am
let i = 1;
function changeImg() {
  if (sliderContainer.dataset.hover === "false") {
    // console.log(sliderimage.getAttribute("src"))

    if (sliderimage.getAttribute("src") === `styles/images/${i}.jpg`) {
      i < 4 ? i++ : (i = 1);
    }

    sliderimage.src = `styles/images/${i}.jpg`;
    setTimeout(`changeImg()`, 2000);
  }
}

let start = new Date();
let end = new Date();
//here I change the data-hover to true or false, and when getting outside of hovering I start the changeImg func
//only if I did it in more than 2000 milisec.
sliderContainer.addEventListener("mouseenter", function (event) {
  sliderContainer.dataset.hover = "true";
  start = new Date();
});

sliderContainer.addEventListener("mouseleave", function (event) {
  sliderContainer.dataset.hover = "false";
  end = new Date();
  if (end - start > 2000) {
    setTimeout("changeImg()", 2000);
  }
});

changeImg();

rightButton.addEventListener("click", function () {
  i < 4 ? i++ : (i = 1);
  sliderimage.src = `styles/images/${i}.jpg`;
});
leftButton.addEventListener("click", function () {
  i > 1 ? i-- : (i = 4);
  sliderimage.src = `styles/images/${i}.jpg`;
});

//---- the hidden/visible mobile nav-bar

const hamburgerMenu = document.querySelector(".hamburger-button");
const mobileSide = document.querySelector(".mobile-side");
const mobileCloseBtn = document.querySelector(".close-button");

// creating the white overlay when opening the mobile nav
const entireBody = document.querySelector("body");
const whiteOverlay = document.createElement("div");
whiteOverlay.style.position = "absolute";
whiteOverlay.style.top = "0";
whiteOverlay.style.left = "0";
whiteOverlay.style.width = "100%";
whiteOverlay.style.height = "100%";
whiteOverlay.style.backgroundColor = "white";
whiteOverlay.style.opacity = ".3";
whiteOverlay.style.zIndex = "4";
whiteOverlay.textContent = "";

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileSide.style.transform = "translate(0, 0)";
  entireBody.appendChild(whiteOverlay);
});

mobileCloseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileSide.style.transform = "translate(-100%, 0)";
  entireBody.removeChild(whiteOverlay);
});
