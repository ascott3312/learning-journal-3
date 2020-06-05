  var getItem = function() {
    var order = prompt('Enter in the Pizza or Hamburger').toLowerCase().trim();
    var item;
    while (order !== 'pizza' && order !== 'hamburger') {
      order = prompt('Please enter "pizza" or "hamburger"...').toLowerCase().trim();
    }
    if (order === 'pizza') {
      item = '<img src="images/pizza.jpg">';
    } else if (order === 'hamburger') {
      item = '<img src="images/hamburger.jpg">';
    }
    return item;
  }
  var howMany = function() {
    var count = prompt('How many do you want to order?');
    while( count === '' || isNaN(count) ) {
      count = prompt('Please enter a number. How many do you want?');
    }
    return Number(count);
  }
  var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';
    //use this to make the number of house images display on the screen. 
    for(var i = 1; i <= total; i++) {
      result = result + '<p>  #' + i + '<br>' + item + '</p>';
    }
    document.getElementById("one").innerHTML = result;
  }