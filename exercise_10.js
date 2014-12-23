
function Validation() {

}

Validation.prototype.checkValue = function(formName) {

  var form = document.forms[formName];
  var message;

  if (empty(form.loginid.value)) {
    message = "Login Id can't be empty.";
  } else if (empty(form.email.value)) {
    message = "Email can't be empty.";
  } else if (!validateEmail(form.email.value)) {
    message = 'Please enter a valid email address';
  } else if (empty(form.name.value)) {
    message = "Name can't be empty.";
  } else if (empty(form.timezone.value)) {
    message = "Timezone can't be empty.";
  } else if (empty(form.homepage.value)) {
    message = "Homepage can't be empty.";
  } else if (!validateUrl(form.homepage.value)) {
    message = 'Please enter a valid url.';
  } else if (empty(form.about.value)) {
    message = "About me can't be empty.";
  } else if (form.about.value.length < 50) {
    message = 'About me section must have at least 50 characters.';
  } else {
    message = '';
  }

  if (message) {
    alert(message);
    event.preventDefault();
  }
}

    function empty(value) {
      if (value !== null) {
        value = value.trim();
      }

      if (!value) {
        return true;
      } else {
        return false;
      }
    }

    function validateEmail(email) {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        return false;
      }
      return true;
    }

    function validateUrl(url) {
      var urlRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
      
      if (urlRegExp.test(url)) {
        return true;
      }
      return false;
    }


var validator = new Validation();
