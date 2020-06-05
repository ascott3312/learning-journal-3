var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

function myNew()
{
    var food = prompt("Enter the Food");
    while (food == '') 
    { 
        food = prompt ("Please enter in a food");
    }   
    document.getElementById("one").innerHTML = "Your " + food + "  is on sale!";
}
function pow (x,y){
    var result = 1;
    for(var i = 0; i < y; i++){
        result *= x;
    }
    return result;
}
console.log(pow(2,4));
console.log(pow(5,5));
gi