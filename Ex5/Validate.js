// The class for validating the inputs.

function Validate() {
}

Validate.prototype.validate = function(email) {
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
    alert("Please enter a valid e-mail address");
    return false;
  }
  return true;
};

Validate.prototype.empty = function(value) {
  if (value !== null) {
    value = value.trim();
  }

  if (!value) {
    return true;
  } else {
    return false;
  }
};

var validator = new Validate();
