
function MoveCountry() {
} 

MoveCountry.prototype.move = function(startBoxId, destinationBoxId) {

  try {
    var countries = document.getElementById(startBoxId);
    var movedCountries = document.getElementById(destinationBoxId);
    
    var country = countries.selectedOptions[0];

    movedCountries.appendChild(country);
  } catch(e) {

  }

}

var moveCountry = new MoveCountry();
