
function MoveCountry() {
} 

MoveCountry.prototype.move = function(sourceBoxId, destinationBoxId) {

  var countries = document.getElementById(sourceBoxId);
  var movedCountries = document.getElementById(destinationBoxId);

  var selectedCountries = countries.selectedOptions;

  for (var i = 0; i < selectedCountries.length; i++) {
    movedCountries.appendChild(country[i]);
    i--;
  }
}

var moveCountry = new MoveCountry();
