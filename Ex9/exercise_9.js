function MoveCountry() {
} 

MoveCountry.prototype.move = function(sourceBoxId, destinationBoxId) {
  var doc = document;
  var sourceList = doc.getElementById(sourceBoxId);
  var destinationList = doc.getElementById(destinationBoxId);
  var fragment = doc.createDocumentFragment();

  var selectedCountries = sourceList.selectedOptions;
  var numberOfSelectedCountries = selectedCountries.length; 
  for (var i = 0; i < numberOfSelectedCountries; i++) {
    fragment.appendChild(selectedCountries[i--]);
    numberOfSelectedCountries--
  }
  destinationList.appendChild(fragment);
}

var moveCountry = new MoveCountry();
