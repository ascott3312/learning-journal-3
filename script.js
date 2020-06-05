var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

function myNew()
{
    var food = prompt("Enter the Food");
    while (food == '', food > -1) 
    { 
        food = prompt("Please enter in a food");
    }   
    document.getElementById("one").innerHTML = "Your " + food + "  is on sale!";
    var price;
    var quantity;
    var total;
        
    price = 1;
    quantity = 2.5;
    total = price * quantity;
        
    var el = document.getElementById('cost');
    el.textContent = '$' + total;
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

function myNew2()
{
    var items = prompt("Enter the number items you want us to deliver");
    while (items == '') 
    { 
        items = prompt("Please enter in a number");
    }   
    document.getElementById("two").innerHTML = "You ordered " + items + ".";
}
