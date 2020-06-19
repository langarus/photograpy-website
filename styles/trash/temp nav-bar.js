
const navBar = document.querySelector("nav")
navBar.style.backgroundColor = "blue"

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight/1.5) {
        if (!navBar.style.position || navBar.style.position === "static"){
            navBar.style.position = "fixed"
            navBar.style.top = "0"   

        }
    }else{
        navBar.style.position = "static"
    }
};
