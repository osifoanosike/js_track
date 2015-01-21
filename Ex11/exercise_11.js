
function NumberCheck() {
  this.regexNumeral = /^[-]?[0-9]+[.]?[0-9]+$/;
  this.number;
}

NumberCheck.prototype.checkNumber = function(formId) {

  var that = this;
  
  window.addEventListener('load', function(event) {

    var form = document.getElementById(formId);
    
    form.addEventListener('submit', function() {

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

  if (this.regexNumeral.test(this.number)) {
    result.value = 'True';
    alert('True! The input is a number.');
  } else {
    result.value = 'False';
    alert('False! The input is not a number.');
    event.preventDefault();
  }
}

var matchNumber = new NumberCheck();
matchNumber.checkNumber('form');
