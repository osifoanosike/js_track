function MoveCountry() {
}

MoveCountry.prototype.init = function() {
  var that         = this;
  var doc          = document;
  var addButton    = doc.getElementById('add');
  var removeButton = doc.getElementById('remove');

  addButton.addEventListener('click', function() {
    that.move('box1', 'box2');
  });
  removeButton.addEventListener('click', function() {
    that.move('box2', 'box1');
  });
}

MoveCountry.prototype.move = function(sourceBoxId, destinationBoxId) {
  var doc             = document;
  var sourceList      = doc.getElementById(sourceBoxId);
  var destinationList = doc.getElementById(destinationBoxId);
  var fragment        = doc.createDocumentFragment();

  var selectedCountries         = sourceList.selectedOptions;
  var numberOfSelectedCountries = selectedCountries.length; 
  for (var i = 0; i < numberOfSelectedCountries; i++) {
    fragment.appendChild(selectedCountries[i--]);
    numberOfSelectedCountries--
  }
  destinationList.appendChild(fragment);
}

window.addEventListener('load', function() {
  var moveCountry = new MoveCountry();
  moveCountry.init();
})
