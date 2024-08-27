let menu = document.querySelector("#menu-icon");
let navber = document.querySelector(".navber");

menu.addEventListener("click", function (){
    navber.classList.toggle("active");
})


window.onscroll = () => {
    navber.classList.remove("actiov")
}