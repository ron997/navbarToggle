// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
navToggle.addEventListener("click", function(){
    //console.log(links.classList)
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    }
    //one line method to replace the 4 lines of code above by using toggle method as illustrated below
    // links.classList.toggle("show-links")
})