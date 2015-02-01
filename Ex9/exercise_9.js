function MoveCountry() {
} 

MoveCountry.prototype.move = function(sourceBoxId, destinationBoxId) {
  var doc = document;
  var sourceList = doc.getElementById(sourceBoxId);
  var destinationList = doc.getElementById(destinationBoxId);

  var selectedCountries = sourceList.selectedOptions;
  for (var i = 0; i < selectedCountries.length; i++) {
    destinationList.appendChild(selectedCountries[i]);
    i--;
  }
}

var moveCountry = new MoveCountry();
