// /* Author: 

// */
var sliderImages = document.querySelectorAll(".slider-list")
previousBtn = document.querySelector(".previous"),
nextBtn = document.querySelector(".next"), 
count = 0 ;

sliderImages.forEach(( img, index ) => {
  img.style.left = (index * 100 ) + "%";
})

function debounce(fun,delay){
  var time ;
  return function(){
    clearTimeout(time);
    time = setTimeout(function(){
      fun.apply(this);
    },delay)
  }
}

nextBtn.addEventListener("click",debounce(function() {
  if(count > -(sliderImages.length - 1) ){
    count--;
    slider();
  }
},300));

previousBtn.addEventListener("click",debounce(function() {
  if(count < 0){
    count++;
    slider();
  }
},300));


var slider = function() {
  sliderImages.forEach((img,index)=>{
    if(count>=-(sliderImages.length-1)   && count <= 0){
      img.style.left = (index * 100 + (count*100)) + "%";
    } 
    else if(count > 0 ){
      img.style.left = (index * 100) + "%";
    }
  })
}

// hamburger menu

var menuBar = document.querySelector(".hamburger");
var menuLines = document.querySelector(".line");
var navBar = document.querySelector("nav");
var navBarList = document.querySelector(".navbar");

menuBar.addEventListener("click",()=>{
  menuLines.classList.toggle("hover");
  navBar.classList.toggle("hover");
  menuBar.classList.toggle("hover");
  navBarList.classList.toggle("hover");

})














