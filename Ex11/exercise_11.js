
function NumberCheck() {
}

NumberCheck.prototype.checkNumber = function(formId) {

  var that = this;
  
  window.addEventListener('load', function() {

    var button = document.getElementById('submit');
    
    button.addEventListener('click', function() {
      
      var form = document.getElementById(formId);
      var input = document.getElementById('number');
      var number = input.value.trim();

      that.validateInput(number);
    });

  });
}

NumberCheck.prototype.validateInput = function(input) {

  if (this.isEmpty(input)) {
    return;
  } else {
    this.isNumber(input);
  }

}

NumberCheck.prototype.isEmpty = function(input) {
  if (validator.empty(input)) {
    alert('The Number field cannot be empty.');
    return true;
  }
}

NumberCheck.prototype.isNumber = function(input) {

  var regexNumeral = /^[0-9]+$/;
  var result = document.getElementById('result');

  if (regexNumeral.test(input)) {
    result.value = 'True';
    alert('True! The input is a number.\n\nClick OK and wait for 5 seconds for the form to submit.');
    setTimeout(function() {
      form.submit()
    }, 5000);

  } else {
    result.value = 'False';
    alert('False! The input is not a number.');
  }
}

var matchNumber = new NumberCheck();
matchNumber.checkNumber('form');
