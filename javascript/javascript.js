
var slider = document.getElementById("fulton");
var output = document.getElementById("längd");
var inputbox = document.getElementById("värdelängd");
var slider1 = document.getElementById("fulton1");
var output1 = document.getElementById("vikt");
var inputbox1 = document.getElementById("värdevikt");



output.addEventListener = slider.value;

slider.oninput = function(){
    inputbox.value = this.value;
}

output1.addEventListener = slider1.value;

slider1.oninput = function(){
    inputbox1.value = this.value;
}


function calc ()
{
    var längd = parseInt(slider.value);
    var vikt = parseInt(slider1.value);
    

    // var a = 1.34283423423423;
    // output1.value = math.round(a);


    if (längd>0&vikt>0);
				document.getElementById("värde").value=(vikt*100)/(längd*längd*längd);
}

   document.getElementById('fulton').onchange = function() {
    // console.log("Hej1");
    calc();
  };
  
  document.getElementById('fulton1').onchange = function() {
    //console.log("Hej11");
    calc();
  };
  

console.log(slider);


slider.värde = function() {
    inputbox.value=this.value;

    calc();
}



slider1.värde = function() {
    inputbox.value=this.value;
    
    calc();
}



// img slide start//

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // ändrar tid per bild
}