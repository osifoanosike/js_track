
function MoveCountry() {
} 

MoveCountry.prototype.move = function(startBoxId, destinationBoxId) {

  var countries = document.getElementById(startBoxId);
  var movedCountries = document.getElementById(destinationBoxId);

  if (countries.selectedOptions.length) {

    var country = countries.selectedOptions;

    for (var i = 0; i < country.length; i++) {
      movedCountries.appendChild(country[i]);
      i--;
    }

  }

}

var moveCountry = new MoveCountry();
