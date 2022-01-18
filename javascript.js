
    var Längd = document.getElementsById("Längd").value;
    var Vikt = document.getElementsById("Vikt").value;
    
    function calc ()
    {
        var Längd = parseInt(Längd.value);
        var Vikt = parseInt(Vikt.value);


if (Längd>0&Vikt>0);
				document.getElementById("Submit").value=(Vikt*100)/(Längd*Längd*Längd);
    }