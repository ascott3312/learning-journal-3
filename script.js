var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

function myNew () {

    var food = prompt("Enter the Food","Turkey");
        if (food != null) 
    {
        document.getElementById("one").innerHTML = 
        "Your " + food + "  is on sale!";
    }   
    else {
        food = "Please enter in a food";
    }    

}