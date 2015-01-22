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
}

Validate.prototype.validateEmail = function(url) {
  
  var emailRegExp = /^[a-z0-9.-_]+@[a-z0-9]{2,}.[a-z.]{2,6}/i;
  if (emailRegExp.test(url)) {
    return true;
  }
  return false;
}

Validate.prototype.validateUrl = function(url) {
  //var urlRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
  // ^((?:https?|ftp):\/\/)[a-z0-9.-]+\/[a-z0-9.]+
  // ^((?:https?|ftp):\/\/)[a-z0-9.-]+\/?([a-z0-9.]+\/?)+
  
  var urlRegExp = /^(https?:\/\/|ftp:\/\/|www\.)[a-z0-9.-]+\/?([a-z0-9.]+\/?)+/i;
    if (urlRegExp.test(url)) {
      return true;
    }
    return false;
}

Validate.prototype.validateMinLength = function(value, minLength) {
  if (value.trim().length < minLength) {
    return true;
  }
  return false;
}

var validator = new Validate();
