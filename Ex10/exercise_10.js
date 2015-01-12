
function Validation() {
}

Validation.prototype.checkValue = function(formName) {

  window.addEventListener('load', function() {

    var form = document.forms[formName];
    var message;

    form.addEventListener('submit', function() {

      var details = document.querySelectorAll('.details');
      var message = "";

      for (var i = 0; i < details.length; i++) {

        if (validator.empty(details[i].value)) {
          var labelText = details[i].previousElementSibling.textContent;
          message = labelText + ' cannot be empty.';
          alert(message);
        }
      }

      if (!validator.validateEmail(form.email.value)) {
        message = 'Please enter a valid email address';
        alert(message);
      }

      if (!validator.validateUrl(form.homepage.value)) {
        message = 'Please enter a valid url.';
        alert(message);
      }
      if (validator.validateMinLength(form.about.value, 50)) {
        message = 'About me section must have at least 50 characters.';
        alert(message);
      }

      if (message) {
        event.preventDefault();
      }
    });
  });
}

var validation = new Validation();
validation.checkValue('form'); 
