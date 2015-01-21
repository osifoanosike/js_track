
function NumberCheck() {
  this.number;
}

NumberCheck.prototype.checkNumber = function(formId) {

  var that = this;
  
  window.addEventListener('load', function() {

    var button = document.getElementById('submit');
    
    button.addEventListener('click', function() {
      
      var form = document.getElementById(formId);
      var input = document.getElementById('number');
      that.number = input.value.trim();

      that.validateInput(that.number);
    });

  });
}

NumberCheck.prototype.validateInput = function() {

  if (this.isEmpty(this.number)) {
    return;
  } else {
    this.isNumber(this.number);
  }

}

NumberCheck.prototype.isEmpty = function() {
  if (validator.empty(this.number)) {
    alert('The Number field cannot be empty.');
    return true;
  }
}

NumberCheck.prototype.isNumber = function() {

  var result = document.getElementById('result');
  var regexNumeral = /^[-]?[0-9]+[.]?[0-9]+$/;

  if (regexNumeral.test(this.number)) {
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
