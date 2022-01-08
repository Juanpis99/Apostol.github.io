
const navToggle = document.querySelector(".nav__bars")
const navItems = document.querySelector(".nav__menu")

navToggle.addEventListener("click",()=>{
  navItems.classList.toggle("nav__menu--show")
})


function initMap(){
  let coord;
  let map;
  let marker;

  coord = {lat:5.3436503 ,lng: -74.4947687};
  map = new google.maps.Map(document.getElementById("map"),{
    zoom: 15,
    center: coord
  });
  marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
