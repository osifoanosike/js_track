// The class for validating the inputs.

function Validate() {
}

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

Validate.prototype.validateEmail = function(email) {
  var atPosition = email.indexOf("@");
  var dotPosition = email.lastIndexOf(".");
  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
    return false;
  }
  return true;
};

Validate.prototype.validateUrl = function(url) {
  var urlRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
  
  if (urlRegExp.test(url)) {
    return true;
  }
  return false;
}

var validator = new Validate();
