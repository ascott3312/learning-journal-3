var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

function myNew()
{
    var food = prompt("Enter the Food");
    while (food == '' || food == null) 
    { 
        food = prompt("Please enter in a food");
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

function myNew2()
{
    var items = prompt("Enter the number items you want us to deliver");
    while (items == '' || items == null || isNaN(items) || items < 1) 
    { 
        items = prompt("Please enter in a positive number");
    }   
    document.getElementById("two").innerHTML = "You ordered " + items + ".";
}

var getItem = function() {
    var order = prompt('What would you like to order?').toLowerCase().trim();
    var item;
    while (order !== 'house' && order !== 'hotel') {
      order = prompt('Please enter "house" or "hotel"...').toLowerCase().trim();
    }
    if (order === 'hotel') {
      item = '<img src="images/hotel.png">';
    } else if (order === 'house') {
      item = '<img src="images/house.png">';
    }
    return item;




function calculateOrder (){
    var price;
    var quantity;
    var total;
        
    price = 1;
    quantity = 2.5;
    total = price * quantity;
        
    var el = document.getElementById('cost');
    el.textContent = '$' + total;
} 

