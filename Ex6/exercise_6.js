function Validation() {
}

Validation.prototype.init = function(formName) {
  var that = this;
  var form = document.forms[formName];
  form.addEventListener('submit', function() {
    that.checkValue(this)
  });
}

Validation.prototype.checkValue = function(form) {
  var details = document.querySelectorAll('.details');
  var message = "";
  for (var i = 0; i < details.length; i++) {
    if (validator.empty(details[i].value)) {
      var labelText = details[i].previousElementSibling.textContent;
      message       = labelText + ' cannot be empty.';
      alert(message);
    }
  }
  if (validator.validateMinLength(form.about.value, 50)) {
    message = 'About Me must have at least 50 characters.';
    alert(message);
  }
  if (message) {
    event.preventDefault();
  }
}

window.addEventListener('load', function() {
  var validation = new Validation();
  validation.init('form'); 
});
