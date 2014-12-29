
function SelectCountry() {
} 

SelectCountry.prototype.addCountry = function () {
  try {  
    var countries = document.getElementById('add');
    var selectedCountries = document.getElementById('remove');
    
    var selectedCountry = countries.selectedOptions[0];

    selectedCountries.appendChild(selectedCountry);
  } catch(e) {
  }
}

SelectCountry.prototype.removeCountry = function() {
  try {
    var countries = document.getElementById('add');
    var selectedCountries = document.getElementById('remove');

    var selectedCountry = selectedCountries.selectedOptions[0];
    
    countries.appendChild(selectedCountry);
  } catch(e) {
  }
}

var selectCountry = new SelectCountry();
