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
    console.log("Hej1");
    calc();
  };
  
  document.getElementById('fulton1').onchange = function() {
    console.log("Hej11");
    calc();
  };
  




slider.värde = function() {
    inputbox.value=this.value;

    calc();
}



slider1.värde = function() {
    inputbox.value=this.value;
    
    calc();
}






