
function NumberCheck() {
  this.number;
  this.result;
}

NumberCheck.prototype.checkNumber = function(formId) {

  var that = this;

  var form = document.getElementById(formId);
  
  form.addEventListener('submit', function() {

    var input = document.getElementById('number');
    that.number = input.value.trim();

    that.validateInput(that.number);
  });
}

NumberCheck.prototype.validateInput = function() {

  if (this.isEmpty(this.number)) {
    event.preventDefault();
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

  this.result = document.getElementById('result');
  if (REGEX.numeral.test(this.number)) {
    this.result.value = 'True';
    alert('True! The input is a number.');
  } else {
    this.result.value = 'False';
    alert('False! The input is not a number.');
    event.preventDefault();
  }
}

var REGEX = {
  numeral: /^[-]?[0-9]+[.]?[0-9]+$/
};

Object.freeze(REGEX);

window.addEventListener('load', function(event) {
  var matchNumber = new NumberCheck();
  matchNumber.checkNumber('matchNumber');
});
