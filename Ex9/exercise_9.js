function MoveCountry() {
} 

MoveCountry.prototype.move = function(sourceBoxId, destinationBoxId) {
  var doc = document;
  var sourceList = doc.getElementById(sourceBoxId);
  var destinationList = doc.getElementById(destinationBoxId);
  var fragment = doc.createDocumentFragment();

  var selectedCountries = sourceList.selectedOptions;
  for (var i = 0; i < selectedCountries.length; i++) {
    fragment.appendChild(selectedCountries[i]);
    i--;
  }
  destinationList.appendChild(fragment);
}

var moveCountry = new MoveCountry();
