


const navToggle = document.querySelector(".nav__bars")
const navItems = document.querySelector(".nav__menu")

navToggle.addEventListener("click",()=>{
  navItems.classList.toggle("nav__menu--show")
})



const servicesItemToggle = document.querySelector(".service-item")
servicesItemToggle.addEventListener("click",()=>{
  navItems.classList.toggle("nav__menu--show")
})

