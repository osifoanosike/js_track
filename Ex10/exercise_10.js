
function Validation() {
}

Validation.prototype.checkValue = function(formName) {

  var form = document.forms[formName];
  var message;

  if (validator.empty(form.loginid.value)) {
    message = "Login Id can't be empty.";
  } else if (validator.empty(form.email.value)) {
    message = "Email can't be empty.";
  } else if (!validator.validateEmail(form.email.value)) {
    message = 'Please enter a valid email address';
  } else if (validator.empty(form.name.value)) {
    message = "Name can't be empty.";
  } else if (validator.empty(form.timezone.value)) {
    message = "Timezone can't be empty.";
  } else if (validator.empty(form.homepage.value)) {
    message = "Homepage can't be empty.";
  } else if (!validator.validateUrl(form.homepage.value)) {
    message = 'Please enter a valid url.';
  } else if (validator.empty(form.about.value)) {
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

var validation = new Validation();
